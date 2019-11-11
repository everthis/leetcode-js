/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function(s, k) {
  const arr = s.split('')
  for(let i = 0, len = s.length; i < len; i += 2 * k) {
    helper(arr, i, k)
  }
  return arr.join('')
};

function helper(arr, start, k) {
  let s = start
  let e = arr.length > start + k - 1 ? start + k - 1 : arr.length
  while(s < e) {
    swap(arr, s, e)
    s++
    e--
  }
}

function swap(arr, s, e) {
  const tmp = arr[s]
  arr[s] = arr[e]
  arr[e] = tmp
}
