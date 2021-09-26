/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
const mostVisited = function(n, rounds) {
  const arr = Array(n + 1).fill(0)
  for(let i = 1, m = rounds.length; i < m; i++) {
    let start = rounds[i - 1], end = rounds[i]

    if(i == 1) arr[start]++
    while(start !== end) {
      start += 1
      if (start === n + 1) start = 1
      arr[start]++
    }
  }
  const max = Math.max(...arr)
  const res = []
  for(let i = 1; i <= n; i++) {
    if(arr[i] === max) res.push(i)
  }
  return res
};
