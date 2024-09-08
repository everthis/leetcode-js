/**
 * @param {number} kx
 * @param {number} ky
 * @param {number[][]} positions
 * @return {number}
 */
var maxMoves = function (kx, ky, positions) {
  //alice goes first
  //alice wants to maximize result

  //add the starting position
  positions.unshift([kx, ky])

  let dp = new Float64Array(positions.length * 2 ** positions.length)
  let degreesBetweenPawnPairs = new Float64Array(
    positions.length * positions.length,
  )

  computeAllDegreesBetweenPawns()

  //if the mask is equal to this, we've visited all pawns
  let targetMask = (1 << positions.length) - 1

  //alice starts, so we set maximize to true
  return dfs(0, true, 1)

  function dfs(pawn1Idx, maximize, mask) {
    if (mask === targetMask) {
      return 0
    }

    let dpIdx = pawn1Idx * 2 ** positions.length + mask
    if (dp[dpIdx] > 0) {
      return dp[dpIdx] - 1
    }

    let best = Infinity
    let worst = 0

    for (let pawn2Idx = 0; pawn2Idx < positions.length; ++pawn2Idx) {
      if (mask & (1 << pawn2Idx)) {
        continue
      }

      let cur = degreeBetween(pawn1Idx, pawn2Idx)
      cur += dfs(pawn2Idx, !maximize, mask | (1 << pawn2Idx))

      best = Math.min(best, cur)
      worst = Math.max(worst, cur)
    }

    let ret
    if (maximize) {
      ret = worst
    } else {
      ret = best
    }

    dp[dpIdx] = ret + 1
    return ret
  }

  function computeAllDegreesBetweenPawns() {
    let targets = new Map(positions.map(([x, y], idx) => [y * 50 + x, idx]))

    let visited = new Array(50 * 50).fill(0)
    const MOVES = [
      [2, 1],
      [-2, 1],
      [2, -1],
      [-2, -1],
      [1, -2],
      [1, 2],
      [-1, 2],
      [-1, -2],
    ]

    for (let i = 0; i < positions.length; ++i) {
      let q = [positions[i]]
      let q2 = []
      let steps = 0

      visited[positions[i][1] * 50 + positions[i][0]] = i

      while (q.length) {
        let [x, y] = q.pop()

        {
          let dpIdx = y * 50 + x
          if (targets.has(dpIdx)) {
            let v1 = i
            let v2 = targets.get(dpIdx)
            degreesBetweenPawnPairs[v1 * positions.length + v2] = steps
            degreesBetweenPawnPairs[v2 * positions.length + v1] = steps
          }
        }

        for (let [offx, offy] of MOVES) {
          let newX = x + offx
          let newY = y + offy

          if (newX >= 50 || newY >= 50 || newX < 0 || newY < 0) {
            continue
          }
          let visitedDpIdx = newY * 50 + newX
          if (visited[visitedDpIdx] === i) {
            continue
          }
          visited[visitedDpIdx] = i
          q2.push([newX, newY])
        }

        if (!q.length) {
          ;[q2, q] = [q, q2]
          ++steps
        }
      }
    }
  }

  function degreeBetween(i, j) {
    return degreesBetweenPawnPairs[i * positions.length + j]
  }
}


