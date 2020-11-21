class ManipulateFiles{
    constructor(){
        this.fscp = require('fs').promises;
        this.fsnp = require('fs');
    }

    getData(name){
        return this.fsnp.readFileSync(`./src/database/${name}.dat`, "utf-8").split("\n").map(Number);
    } 

    setDatas(name, data){
        this.fsnp.writeFileSync(`./src/database/${name[0]}.dat`, data.join('\n'));
        this.fsnp.writeFileSync(`./src/database/${name[1]}.dat`, data.reverse().join('\n'));
    } 

    async listFiles(diretorio) {
        let listaDeArquivos = await this.fscp.readdir(diretorio);
        return listaDeArquivos;
    }

    getCSV(dirrectory, name){
        return this.fsnp.readFileSync(`./src/database/CSVs/${dirrectory}/${name}`, "utf-8");
    } 
    
    setCSV(send, table){	
        this.fsnp.appendFileSync(`./src/database/CSVs/${send[0]}/${send[0]}Tabela0${table+1}.csv`, [send[4], send.slice(1,4)+'\n'], err => {if (err) throw err;});
    }
    
    createCSV(dirrectory, name){
        this.fsnp.writeFileSync(`./src/database/CSVs/${dirrectory}/${name}`, ["dateSize", "random", "growing", "degrowing"]+'\n', err => {if (err) throw err;});
    }

    createDIR(name){
        if (!this.fsnp.existsSync(`./src/database/CSVs/${name}`)){
                this.fsnp.mkdir(`./src/database/CSVs/${name}`,  err => {if (err) throw err;});
        }
    }

}

module.exports = ManipulateFiles;