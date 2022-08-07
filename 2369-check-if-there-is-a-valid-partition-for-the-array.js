/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {
  const n = nums.length
  const memo = {}
  function dfs(i, cur) {
    // console.log(i,cur)
    if(i === n) {
      if(chk1(cur) || chk2(cur) || chk3(cur) || cur.length === 0) return true
      return false
    }
    const k = `${i}_${cur.join(',')}`
    if(memo[k] != null) return memo[k]
    let res
    if(cur.length === 0) {
      cur.push(nums[i])
      res = dfs(i + 1, cur)
    } else if(cur.length === 1) {
      cur.push(nums[i])
      res = dfs(i + 1, cur)
    } else if(cur.length === 2) {
      let r1 = false
      if(chk1(cur)) {
        r1 = dfs(i + 1, [nums[i]])
      }
      cur.push(nums[i])
      let r2 = dfs(i + 1, cur)
      res = r1 || r2
    } else if(cur.length === 3) {
      if(chk2(cur) || chk3(cur)) {
        res = dfs(i + 1, [nums[i]])
      }else res = false
    }
    memo[k] = res
    return res
  }
  
  return dfs(0, [])
  
  function chk1(arr) {
    return arr.length === 2 && arr[0] === arr[1]
  }
  function chk2(arr) {
    return arr.length === 3 && arr[0] === arr[1] && arr[2] === arr[1]
  }
  function chk3(arr) {
    return arr.length === 3 && arr[1] - arr[0] === 1 && arr[2] - arr[1] === 1
  }
};
