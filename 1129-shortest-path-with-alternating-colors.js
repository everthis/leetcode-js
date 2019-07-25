/**
 * @param {number} n
 * @param {number[][]} red_edges
 * @param {number[][]} blue_edges
 * @return {number[]}
 */
const shortestAlternatingPaths = function(n, red_edges, blue_edges) {
  let d = new Array(n * 2).fill(Number.MAX_SAFE_INTEGER)
  let queue = []
  d[0] = d[n] = 0
  queue.push(0)
  queue.push(n)
  while (queue.length) {
    let cur = queue.shift()
    if (cur < n) {
      for (let r of red_edges) {
        if (r[0] == cur && d[r[1] + n] > d[cur] + 1) {
          d[r[1] + n] = d[cur] + 1
          queue.push(r[1] + n)
        }
      }
    } else {
      for (let b of blue_edges) {
        if (b[0] == cur - n && d[b[1]] > d[cur] + 1) {
          d[b[1]] = d[cur] + 1
          queue.push(b[1])
        }
      }
    }
  }
  let res = new Array(n).fill(-1)
  for (let i = 0; i < n; i++) {
    res[i] =
      Math.min(d[i], d[i + n]) == Number.MAX_SAFE_INTEGER
        ? -1
        : Math.min(d[i], d[i + n])
  }
  return res
}
