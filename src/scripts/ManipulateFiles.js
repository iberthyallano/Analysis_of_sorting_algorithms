class ManipulateFiles{
    constructor(){
        this.fscp = require('fs').promises;
        this.fsnp = require('fs');
    }

    getData(name){
        const fname = `./src/database/${name}.dat`;
        return this.fsnp.readFileSync(fname, "utf-8").split("\n").map(Number);
    } 

    setDatas(name, data){
        this.fsnp.writeFileSync(`./src/database/${name[0]}.dat`, data.join('\n'));
        this.fsnp.writeFileSync(`./src/database/${name[1]}.dat`, data.reverse().join('\n'));
    } 

    async listarArquivos(diretorio) {
        let listaDeArquivos = await this.fscp.readdir(diretorio);
        return listaDeArquivos;
    }
    
    setCSV(send, table){	
        this.fsnp.appendFileSync(`./src/database/CSVs/${send[0]}Tabela0${table+1}.csv`, [send[4], send.slice(1,4)+'\n'], err => {if (err) throw err;});
    }
    
    createCSV(name){
        this.fsnp.writeFileSync(`./src/database/CSVs/${name}`, ["tamanhoData", "aleatorio", "crescente", "decrescente"]+'\n', err => {if (err) throw err;});
    }

}

module.exports = ManipulateFiles;