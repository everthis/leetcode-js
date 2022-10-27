/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
const makeSimilar = function (nums, target) {
  const odd = [], even = []
  const todd = [], teven = []
  for(const e of nums) {
    if(e % 2 === 0) even.push(e)
    else odd.push(e)
  }
  for(const e of target) {
    if(e % 2 === 0) teven.push(e)
    else todd.push(e)
  }
  const sfn = (a, b) => a - b
  odd.sort(sfn)
  todd.sort(sfn)
  even.sort(sfn)
  teven.sort(sfn)
  let res = 0
  for(let i = 0, n = odd.length; i < n; i++) {
    res += Math.abs(odd[i] - todd[i]) / 2
  }
  for(let i = 0, n = even.length; i < n; i++) {
    res += Math.abs(even[i] - teven[i]) / 2
  }
  return res / 2
}
