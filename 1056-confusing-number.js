/**
 * @param {number} n
 * @return {boolean}
 */
const confusingNumber = function(n) {
  //  0, 1, 6, 8, 9
  const invalid = new Set(['2', '3', '4', '5', '7'])
  const valid = new Set(['6', '9'])
  const arr = ('' + n).split('')
  let num = 0
  for(let i = 0; i < arr.length; i++) {
    const ch = arr[i]
    if(invalid.has(ch)) return false
    if(ch === '6') arr[i] = '9'
    else if(ch  === '9') arr[i] = '6'
  }
  arr.reverse()
  return arr.join('') !== '' + n
};
