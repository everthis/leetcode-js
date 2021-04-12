/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findTheWinner = function(n, k) {
  const arr = Array(n).fill(0)
  for(let i = 0; i < n; i++) arr[i] = i + 1
  let idx = 0
  while(arr.length > 1) {
    idx = (idx + k - 1) % arr.length
    arr.splice(idx, 1)
  }
  return arr.length ? arr[0] : -1
};

