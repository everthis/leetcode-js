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

// another

const isStrobogrammatic = function(num) {
  const map = { 0: '0', 1: '1', 8: '8', 6: '9', 9: '6' }
  let left = 0
  let right = num.length - 1

  while (left < right) {
    const leftNum = num[left]
    const rightNum = num[right]
    if (map[leftNum] != rightNum) return false
    left++
    right--
  }
  if (right == left) {
    if (!map[num[right]] || num[right] == '9' || num[right] == '6') return false
  }
  return true
}
