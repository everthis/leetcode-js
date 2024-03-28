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
  const set = new Set()
  for(const e of original) set.add(e)
  for(const e of changed) set.add(e)
  let idx = 0
  for(const e of set) {
      index[e] = idx
      idx++
  }

  const n = set.size
  const dis = Array.from({ length: n }, () => Array(n).fill(Infinity))
  for(let i = 0; i < original.length; i++) {
      const s = index[original[i]], e = index[changed[i]]
      dis[s][e] = Math.min(dis[s][e], cost[i])
  }
  for(let k = 0; k < n; k++) {
      for(let i = 0; i < n; i++) {
          if(dis[i][k] === Infinity) continue
          for(let j = 0; j < n; j++) {
              if(dis[k][j] === Infinity) continue
              dis[i][j] = Math.min(dis[i][j], dis[i][k] + dis[k][j])
          }
      }
  }
  const lenSet = new Set()
  for(const e of original) lenSet.add(e.length)
  const len = source.length
  const dp = Array(len + 1).fill(Infinity)
  dp[0] = 0
  for(let i = 0; i < len; i++) {
      if(dp[i] === Infinity) continue
      if(source[i] === target[i]) {
          dp[i + 1] = Math.min(dp[i + 1], dp[i])
      }
      for(const le of lenSet) {
          if(i + le > len) continue
          const sub = source.slice(i, i + le)
          const subT = target.slice(i, i + le)
          const sIdx = index.hasOwnProperty(sub) ? index[sub] : -1
           const tIdx = index.hasOwnProperty(subT) ? index[subT] : -1
         if(sIdx >= 0 && tIdx >= 0 && dis[sIdx][tIdx] !== Infinity) {
             dp[i + le] = Math.min(dp[i + le], dp[i] + dis[sIdx][tIdx])
         }
      }
  }
  // console.log(dis,dp)
  return dp.at(-1) === Infinity ? -1 : dp.at(-1)
}

// another


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
