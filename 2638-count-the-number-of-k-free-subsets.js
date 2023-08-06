/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countTheNumOfKFreeSubsets = function (nums, k) {
  let res = 1
  const marr = Array.from({ length: k }, () => Array())
  for (const e of nums) {
    marr[e % k].push(e)
  }

  for (let i = 0; i < k; i++) {
    res *= helper(marr[i])
  }

  return res

  function helper(arr) {
    arr.sort((a, b) => a - b)
    let take = 0,
      no_take = 1
    for (let i = 0; i < arr.length; i++) {
      let take_temp = take,
        no_take_temp = no_take
      if (i >= 1 && arr[i] == arr[i - 1] + k) {
        take = no_take_temp
        no_take = take_temp + no_take_temp
      } else {
        take = take_temp + no_take_temp
        no_take = take_temp + no_take_temp
      }
    }
    return take + no_take
  }
}
