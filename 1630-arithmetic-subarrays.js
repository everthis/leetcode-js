/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
const checkArithmeticSubarrays = function(nums, l, r) {
  const len = l.length
  const res = []
  for(let i = 0; i < len; i++) {
    res.push(chk(nums.slice(l[i], r[i] + 1)))
  }
  return res
};

function chk(arr) {
  if(arr.length === 0 || arr.length === 1 || arr.length === 2) return true
  arr.sort((a, b) => a - b)
  const diff = arr[1] - arr[0]
  for(let i = 2, len = arr.length; i < len; i++) {
    if(arr[i] - arr[i - 1] !== diff) return false
  }
  return true
}
