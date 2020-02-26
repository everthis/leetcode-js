/**
 * @param {string} s
 * @return {number[]}
 */
const findPermutation = function(s) {
  const n = s.length
  const arr = Array.from({ length: n + 1 }, (el, idx) => idx + 1)
  for(let h = 0; h < n; h++) {
    if(s.charAt(h) === 'D') {
      const l = h
      while(h < n && s.charAt(h) === 'D') h++
      reverse(arr, l, h)
    }
  }
  return arr
};

function reverse(arr, l, h) {
  while(l < h) {
    arr[l] ^= arr[h]
    arr[h] ^= arr[l]
    arr[l] ^= arr[h]
    l++, h--
  }
}
