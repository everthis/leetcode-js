/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minimumOperations = function (nums, start, goal) {
  const visited = Array(1001).fill(0)
  const q = []
  q.push([start, 0])
  visited[start] = 1
  while (q.length) {
    const [val, idx] = q.shift()
    if (val === goal) return idx
    for (let e of nums) {
      if (val + e === goal) return idx + 1
      if (val + e <= 1000 && val + e >= 0 && !visited[val + e]) {
        visited[val + e] = 1
        q.push([val + e, idx + 1])
      }
      if (val - e === goal) return idx + 1
      if (val - e <= 1000 && val - e >= 0 && !visited[val - e]) {
        visited[val - e] = 1
        q.push([val - e, idx + 1])
      }

      if ((val ^ e) === goal) return idx + 1
      if ((val ^ e) <= 1000 && (val ^ e) >= 0 && !visited[val ^ e]) {
        visited[val ^ e] = 1
        q.push([val ^ e, idx + 1])
      }
    }
  }

  return -1
}
