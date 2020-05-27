/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
const possibleBipartition = function (N, dislikes) {
  const graph = []
  for (let i = 0; i <= N; i++) {
    graph[i] = []
  }
  for (let el of dislikes) {
    graph[el[0]].push(el[1])
    graph[el[1]].push(el[0])
  }
  const color = new Array(N + 1).fill(0)
  for (let i = 1; i <= N; i++) {
    if (color[i] == 0) {
      color[i] = 1
      const q = []
      q.push(i)
      while (q.length > 0) {
        let cur = q.shift()
        for (let j of graph[cur]) {
          if (color[j] == 0) {
            color[j] = color[cur] == 1 ? 2 : 1
            q.push(j)
          } else {
            if (color[j] == color[cur]) return false
          }
        }
      }
    }
  }
  return true
}

// another

/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
const possibleBipartition = function (N, dislikes) {
  const graph = new Array(N + 1)
  for (const [a, b] of dislikes) {
    if (!graph[a]) graph[a] = []
    graph[a].push(b)
    if (!graph[b]) graph[b] = []
    graph[b].push(a)
  }

  const colors = new Array(N + 1)
  const dfs = (node, color = 0) => {
    colors[node] = color
    const nextColor = color ^ 1
    const children = graph[node] || []
    for (const child of children) {
      if (colors[child] !== undefined) {
        if (colors[child] !== nextColor) return false
      } else {
        if (!dfs(child, nextColor)) return false
      }
    }
    return true
  }
  for (let i = 1; i <= N; i++) {
    if (colors[i] === undefined && !dfs(i)) return false
  }
  return true
}
