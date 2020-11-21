function InsertionSort(data){
    let copy = [ ...data ];
    for(let i = 1; i < copy.length; i++){
        let chosen = copy[i];
        let j = i-1;
        while(j >= 0 && copy[j] > chosen){
            copy[j+1] = copy[j];
            j = j-1;
        }
        copy[j+1] = chosen;
    }
    return copy;
}
module.exports = InsertionSort;