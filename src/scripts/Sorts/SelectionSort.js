function SelectionSort(data){
    const copy = [ ...data ];
    for(let i = 0; i < copy.length; i++){
        let lowest_index = i;
        for(let j = i; j < copy.length; j++){
            if(copy[lowest_index] > copy[j]){
                lowest_index = j
            }
        }
        if(i != lowest_index){
            let aux = copy[lowest_index];
            copy[lowest_index] = copy[i];
            copy[i] = aux;
        }
    }
    return copy;
}
module.exports = SelectionSort;