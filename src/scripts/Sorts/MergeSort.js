function merge(esquerda, direita){
    let result = [], i_esquerda = 0, i_direita = 0;
    while(i_esquerda < esquerda.length && i_direita < direita.length){
        esquerda[i_esquerda] < direita[i_direita] ? result.push(esquerda[i_esquerda++]) : result.push(direita[i_direita++]);
    }
    return result.concat(esquerda.slice(i_esquerda), direita.slice(i_direita));
}

function MergeSort(data){
    const copy = [ ...data ];
    if(copy.length <= 1){
        return copy;
      }
      let meio = copy.length >> 1;
      let esquerda = copy.slice(0, meio);
      let direita = copy.slice(meio);
      return merge(MergeSort(esquerda), MergeSort(direita));
}
module.exports = MergeSort;