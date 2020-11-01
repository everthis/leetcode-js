/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
const canFormArray = function(arr, pieces) {
  const str = arr.join('-')
  for(let i = 0, len = pieces.length; i < len; i++) {
    const tmp = pieces[i].join('-')
    if(str.indexOf(tmp) === -1) return false
  }
  return true
};
