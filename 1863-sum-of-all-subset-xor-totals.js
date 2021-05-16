/**
 * @param {number[]} nums
 * @return {number}
 */
const subsetXORSum = function(nums) {
  let res = {sum: 0}
  
  helper(nums, 0, [], res)
  return res.sum
};

function helper(arr, idx, cur, res) {
  if(idx === arr.length) {
    res.sum += calc(cur)
    return
  }
  const clone = cur.slice()
  helper(arr, idx + 1, clone, res)
  const c2 = cur.slice()
  c2.push(arr[idx])
  helper(arr, idx + 1, c2, res)
}

function calc(arr) {
  let res = 0
  for(let e of arr) res ^= e
  return res
}
