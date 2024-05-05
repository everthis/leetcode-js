/**
 * @param {number[]} nums
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var minCostToEqualizeArray = function (nums, cost1, cost2) {
  const big = BigInt
  const mod = big(1e9 + 7)
  const max = Math.max(...nums)
  
  cost1 = big(cost1)
  cost2 = big(cost2)
  
  const l = []
  let sum = 0n
  for (let i = 0; i < nums.length; i++) {
    const diff = big(max - nums[i])
    sum += diff
    l.push(diff)
  }
  l.sort((a ,b) => {
    if(a > b) {
      return -1;
    } else if (a < b){
      return 1;
    } else {
      return 0;
    }
  });

  if (cost1 * 2n <= cost2) {
    return Number((sum * cost1) % mod)
  }

  let ans = big(1e30)
  for (let add = 0; add <= max; add++) {
    let tmp = 0n
    if (l[0] <= sum / 2n) {
      tmp += (sum / 2n) * cost2
      tmp += (sum % 2n) * cost1
      if(tmp < ans) ans = tmp
    } else {
      tmp += (sum - l[0]) * cost2
      tmp += (l[0] - (sum - l[0])) * cost1
      if(tmp < ans) ans = tmp
    }

    l[0]++
    sum += big(nums.length)
  }

  return ans % mod
}
