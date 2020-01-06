/**
 * @param {string} num
 * @return {boolean}
 */
const isStrobogrammatic = function(num) {
  const m = {
    0: 0,
    1: 1,
    2: null,
    3: null,
    4: null,
    5: null,
    6: 9,
    7: null,
    8: 8,
    9: 6
  }
  const arr = num.split('')
  for(let i = 0, len = arr.length; i < len; i++) {
    if(m[arr[i]] === null) return false
    else arr[i] = m[arr[i]]
  }
  return num === arr.reverse().join('')
};
