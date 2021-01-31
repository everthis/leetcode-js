/**
 * @param {number[]} candiesCount
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const canEat = function(candiesCount, queries) {
  const n = candiesCount.length
  const pre = Array(n).fill(0)
  for(let i = 1; i < n; i++) {
    pre[i] = pre[i - 1] + candiesCount[i - 1]
  }
  return queries.map((e, i) => {
    const [t, d, c] = e
    const num = candiesCount[t]
    const min = d, max = (d + 1) * c

    if(pre[t] + num > min && pre[t] < max) {
       return true
    } else {
       return false
    }
  })
};
