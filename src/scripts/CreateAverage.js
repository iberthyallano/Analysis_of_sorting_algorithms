const ManipulateFiles = require('./ManipulateFiles');

async function CreateAverage(){
    let files = new ManipulateFiles();   
    await files.createDIR("__Average__");

    let dir = ["BubbleSort", "InsertionSort", "QuickSort", "SelectionSort", "MergeSort"];
    let order = ["random", "growing", "degrowing"];
    let quantities = [10000,20000,30000,100000,200000,300000,1000000];

    let totalDirCsv = await files.listFiles(`./src/database/CSVs/${dir[0]}`);
    console.log(totalDirCsv);
    console.log("\n");    
    //                                      func, ----------------------------------------- , entradas , ---------- , order
    // let tabela01 = parseFloat((files.getCSV(dir[0], totalDirCsv[0]).split("\n").splice(1,8))[0].split(",").splice(1,1));
    // let tabela02 = parseFloat((files.getCSV(dir[0], totalDirCsv[1]).split("\n").splice(1,8))[0].split(",").splice(1,1));
    // let tabela03 = parseFloat((files.getCSV(dir[0], totalDirCsv[2]).split("\n").splice(1,8))[0].split(",").splice(1,1));
    // let tabela04 = parseFloat((files.getCSV(dir[0], totalDirCsv[3]).split("\n").splice(1,8))[0].split(",").splice(1,1));
    // let tabela05 = parseFloat((files.getCSV(dir[0], totalDirCsv[4]).split("\n").splice(1,8))[0].split(",").splice(1,1));

//     let media = ((tabela01 + tabela02 + tabela03 + tabela04 + tabela05)/5);

//     console.log(media);
//     console.log(media*1000000000);
    console.log(parseFloat((files.getCSV(dir[0], totalDirCsv[0]).split("\n").splice(1,8))[1].split(",").splice(1,1)));
}
module.exports = CreateAverage;
