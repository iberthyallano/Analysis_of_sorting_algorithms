const ManipulateFiles = require('./src/scripts/ManipulateFiles');
const SortsTime = require('./src/scripts/SortsTime');
const CreateMean = require('./src/scripts/CreateMean');

const BubbleSort = require('./src/scripts/Sorts/BubbleSort');
const InsertionSort = require('./src/scripts/Sorts/InsertionSort');
const QuickSort = require('./src/scripts/Sorts/QuickSort');
const SelectionSort = require('./src/scripts/Sorts/SelectionSort');
const MergeSort = require('./src/scripts/Sorts/MergeSort');

let files = new ManipulateFiles();

async function main(totalTables = 5){

	let database = ["random", "growing", "degrowing"];
	let quantities = [10000,20000,30000,100000,200000,300000,1000000];
	let funcs = [BubbleSort, InsertionSort, QuickSort, SelectionSort, MergeSort];

    let totalDB = await files.listFiles('./src/database');
    let totalDirCsv = await files.listFiles('./src/database/CSVs');
    
    if(totalDB.length-2 === 0){
		SortsTime("random", 1000000, MergeSort, true);
    }
    
	if(totalDirCsv.length < funcs.length){
		for(let i in funcs){
			await files.createDIR(funcs[i].name);
		}
	}

	for(let table = 0; table < totalTables; table++){
		await Start(funcs, quantities, database, table);	
    }

    // CreateMean();
}

async function Start(funcs, quantities, database, table){
    for (let i in funcs){
        await files.createCSV(funcs[i].name,`${funcs[i].name}Tabela0${table+1}.csv`);
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


main();