function QuickSort(data, bottom = 0, top = data.length) {
    let copy = [ ...data ];
    if (bottom < top) {
      let pivot = copy[top];
      let i, j;
      i = bottom - 1;
      for (j = bottom; j <= top - 1; j++) {
        if (copy[j] <= pivot) {
          i++;
          let aux = copy[j];
          copy[j] = copy[i];
          copy[i] = aux;
        }
      }
      let aux = copy[top];
      copy[top] = copy[i + 1];
      copy[i + 1] = aux;
      pivot_pos = i + 1;

      QuickSort(copy, bottom, pivot_pos - 1);
      QuickSort(copy, pivot_pos + 1, top);
    }
}
module.exports = QuickSort;