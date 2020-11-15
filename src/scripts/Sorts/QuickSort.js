function QuickSort(data, inferior, superior) {
    const copy = [ ...data ];
    if (inferior < superior) {
      let pivo = copy[superior];
      let i, j;
      i = inferior - 1;
      for (j = inferior; j <= superior - 1; j++) {
        if (copy[j] <= pivo) {
          i++;
          let aux = copy[j];
          copy[j] = copy[i];
          copy[i] = aux;
        }
      }
      let aux = copy[superior];
      copy[superior] = copy[i + 1];
      copy[i + 1] = aux;
      pivo_pos = i + 1;

      QuickSort(copy, inferior, pivo_pos - 1);
      QuickSort(copy, pivo_pos + 1, superior);
    }
}
module.exports = QuickSort;