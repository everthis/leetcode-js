/**
 * @param {string} S
 * @return {string}
 */
const makeLargestSpecial = function(S) {
  let count = 0, i = 0
  const res = []
  for(let j = 0, len = S.length; i < len; j++) {
    if(S.charAt(j) === '1') count++
    else count--
    if(count === 0) {
      res.push('1' + makeLargestSpecial(S.substring(i + 1, j)) + '0')
      i = j + 1
    }
  }
  return res.sort().reverse().join('')
};
