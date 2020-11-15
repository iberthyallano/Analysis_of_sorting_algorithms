const ManipulateFiles = require('./src/scripts/ManipulateFiles');
const SortsTime = require('./src/scripts/SortsTime');

const BubbleSort = require('./src/scripts/Sorts/BubbleSort');
const InsertionSort = require('./src/scripts/Sorts/InsertionSort');
const QuickSort = require('./src/scripts/Sorts/QuickSort');
const SelectionSort = require('./src/scripts/Sorts/SelectionSort');
const MergeSort = require('./src/scripts/Sorts/MergeSort');

async function main(totalTables = 5){
	let files = new ManipulateFiles();
	let database = ["aleatorio", "crescente", "decrescente"];
	let quantities = [10000,20000,30000,100000,200000,300000,1000000];
	let funcs = [BubbleSort, InsertionSort, QuickSort, SelectionSort, MergeSort];

	let totalDB = await files.listarArquivos('./src/database');

	if(totalDB.length-2 === 0){
		SortsTime("aleatorio", 1000000, MergeSort, true);
	}

	for(let table = 0; table < totalTables; table++){
		for (let i in funcs){
			files.createCSV(`${funcs[i].name}Tabela0${table+1}.csv`)
			for(let j in quantities){
				let auxSend = [];
				for(let k in database){
					let send = SortsTime(database[k], quantities[j], funcs[i]);
					auxSend[0] = send.name_function;
					auxSend.push([send.runtime]);
				}
				files.setCSV([...auxSend, quantities[j]], table);
			}
		}
	}
}

main(1);