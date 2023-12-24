/**
 * @param {string} source
 * @param {string} target
 * @param {string[]} original
 * @param {string[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (source, target, original, changed, cost) {
  const index = {}
  original.forEach((o) => {
    if (!(o in index)) {
      index[o] = Object.keys(index).length
    }
  })
  changed.forEach((c) => {
    if (!(c in index)) {
      index[c] = Object.keys(index).length
    }
  })

  const n = Object.keys(index).length
  const dis = new Array(n)
    .fill(null)
    .map(() => new Array(n).fill(Number.POSITIVE_INFINITY))

  for (let i = 0; i < cost.length; ++i) {
    dis[index[original[i]]][index[changed[i]]] = Math.min(
      dis[index[original[i]]][index[changed[i]]],
      cost[i],
    )
  }

  for (let k = 0; k < n; ++k) {
    for (let i = 0; i < n; ++i) {
      if (dis[i][k] < Number.POSITIVE_INFINITY) {
        for (let j = 0; j < n; ++j) {
          if (dis[k][j] < Number.POSITIVE_INFINITY) {
            dis[i][j] = Math.min(dis[i][j], dis[i][k] + dis[k][j])
          }
        }
      }
    }
  }

  const substrLengths = new Set(original.map((o) => o.length))

  const dp = new Array(target.length + 1).fill(Number.POSITIVE_INFINITY)
  dp[0] = 0

  for (let i = 0; i < target.length; ++i) {
    if (dp[i] === Number.POSITIVE_INFINITY) {
      continue
    }

    if (target[i] === source[i]) {
      dp[i + 1] = Math.min(dp[i + 1], dp[i])
    }

    for (const t of substrLengths) {
      if (i + t >= dp.length) {
        continue
      }

      const subSource = source.substring(i, i + t)
      const subTarget = target.substring(i, i + t)

      const c1 = subSource in index ? index[subSource] : -1
      const c2 = subTarget in index ? index[subTarget] : -1

      if (c1 >= 0 && c2 >= 0 && dis[c1][c2] < Number.POSITIVE_INFINITY) {
        dp[i + t] = Math.min(dp[i + t], dp[i] + dis[c1][c2])
      }
    }
  }

  return dp[dp.length - 1] !== Number.POSITIVE_INFINITY ? dp[dp.length - 1] : -1
}
