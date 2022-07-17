/**
 * @param {number[]} data
 * @return {number}
 */
const minSwaps = function(data) {
  let num = 0, n = data.length
  const arr = Array(n).fill(0)
  for(let i = 0; i < n; i++) {
    const e = data[i]
    if(e === 1) {
      num++
    }
    arr[i] = num
  }
  if(num === 0) return 0
  let res = num - arr[num - 1]
  for(let i = num; i < n; i++) {
    res = Math.min(res, num - (arr[i] - arr[i - num]))
  }
  return res
};
