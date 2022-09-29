/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
const numsSameConsecDiff = function (n, k) {
  const res = []
  
  for(let i = 1; i <= 9; i++) {
    dfs(n - 1, [i])
  }
 
  return res

  function dfs(num, arr) {
    if(num === 0) {
      res.push(+arr.join(''))
      return 
    }

    for(let i = 0; i <= 9; i++) {
      if(Math.abs(i - arr[arr.length - 1]) === k) {
        arr.push(i)
        dfs(num - 1, arr)
        arr.pop()
      }
    }
  }
}
