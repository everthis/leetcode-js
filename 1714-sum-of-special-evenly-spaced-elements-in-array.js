/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
const solve = function (nums, queries) {
  const n = nums.length
  const dividingPoint = Math.floor(Math.sqrt(n))
  const mod = 1e9 + 7
  const prefix = new Map()

  const res = new Array(queries.length)
  for (let i = 0; i < queries.length; i++) {
    let x = queries[i][0],
      y = queries[i][1]
    if (y > dividingPoint) {
      let sm = 0
      while (x < n) {
        sm += nums[x]
        sm %= mod
        x += y
      }
      res[i] = sm
    } else {
      let startingPoint = x % y
      if (!prefix.has(y)) {
        prefix.set(y, new Map())
      }
      if (!prefix.get(y).has(startingPoint)) {
        const curPrefix = []
        curPrefix.push(0)
        let cur = startingPoint,
          sm = 0
        while (cur < n) {
          sm += nums[cur]
          sm %= mod
          curPrefix.push(sm)
          cur += y
        }
        prefix.get(y).set(startingPoint, curPrefix)
      }
      const curPrefix = prefix.get(y).get(startingPoint)
      res[i] =
        (curPrefix[curPrefix.length - 1] - curPrefix[~~(x / y)] + mod) % mod
    }
  }
  return res
}
