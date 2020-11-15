function merge(left, right){
    let result = [], i_left = 0, i_right = 0;
    while(i_left < left.length && i_right < right.length){
        left[i_left] < right[i_right] ? result.push(left[i_left++]) : result.push(right[i_right++]);
    }
    return result.concat(left.slice(i_left), right.slice(i_right));
}

function MergeSort(data){
    const copy = [ ...data ];
    if(copy.length <= 1){
        return copy;
      }
      let middle = copy.length >> 1;
      let left = copy.slice(0, middle);
      let right = copy.slice(middle);
      return merge(MergeSort(left), MergeSort(right));
}
module.exports = MergeSort;