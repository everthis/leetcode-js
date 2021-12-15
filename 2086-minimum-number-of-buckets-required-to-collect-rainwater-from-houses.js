/**
 * @param {string} street
 * @return {number}
 */
var minimumBuckets = function(street) {
  const arr = street.split(''), n = arr.length
  let res = 0
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 'H') {
      if(i > 0 && arr[i - 1] === 'B') continue
      if(i < n - 1 && arr[i + 1] === '.') arr[i + 1] = 'B', res++
      else if(i > 0 && arr[i - 1] === '.') arr[i - 1] = 'B', res++
      else return -1
    }
  }
  return res
};
