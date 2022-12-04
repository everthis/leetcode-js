/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
  const arr = sentence.split(' ')
  const n = arr.length
  for(let i = 0; i < n; i++) {
    if(i === n - 1) {
      if(arr[i][arr[i].length - 1] !== arr[0][0]) return false
    } else {
      if(arr[i][arr[i].length - 1] !== arr[i + 1][0]) return false
    }
  }
  return true
};
