function BubbleSort(data){
    let copy = [ ...data ];
    for (var i = 0; i < copy.length; i++) { 
        for (var j = 0; j < copy.length-1-i; j++) { 
            if(copy[j] > copy[j+1]) {
                var aux = copy[j];  
                copy[j] = copy[j+1]; 
                copy[j+1] = aux; 
            }
        }   
    }
    return copy;
}
module.exports = BubbleSort;