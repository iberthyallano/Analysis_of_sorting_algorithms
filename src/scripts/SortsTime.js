const ManipulateFiles = require('../scripts/ManipulateFiles');

function SortsTime(name, length, func, setData = false){
	let files = new ManipulateFiles();
	let data = files.getData(name).slice(0, length);
	// console.log(data);
	var hrstart = process.hrtime();
	let ndata = func(data);
	var hrend = process.hrtime(hrstart);
	// console.log(ndata);
	if(setData){
		files.setDatas(["crescente", "decrescente"], ndata);
		return;
	}
	
	return {
		name_function : func.name,
		name_database: name,
		length_database: length,
		runtime:(hrend[0]+'.'+hrend[1])
	}
}

module.exports = SortsTime;