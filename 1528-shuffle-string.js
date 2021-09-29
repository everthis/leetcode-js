/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function(s, indices) {
  const n = s.length
  const arr = Array(n)
  for(let i = 0; i < n; i++) {
    arr[indices[i]] = s[i]
  }
  return arr.join('')
};
