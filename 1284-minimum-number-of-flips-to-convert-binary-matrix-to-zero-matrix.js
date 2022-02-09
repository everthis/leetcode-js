/**
 * @param {number[][]} mat
 * @return {number}
 */
const minFlips = function (mat) {
  let start = 0
  const m = mat.length, n = mat[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      start |= mat[i][j] << (i * n + j)
    }
  }
  let q = [start]
  const seen = new Set(), dirs = [[-1, 0], [1, 0], [0, -1], [0, 1], [0, 0]]

  for(let i = 0; q.length; i++) {
    const tmp = []
    for (let size = q.length; size > 0; size--) {
      const cur = q.pop()
      if(cur === 0) return i
      for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
          let next = cur
          for(const [dx, dy] of dirs) {
            const r = i + dx, c = j + dy
            if(r >= 0 && r < m && c >= 0 && c < n) {
              next ^= (1 << (r * n + c))
            }
          }
          if (!seen.has(next)) {
            seen.add(next)
            tmp.push(next)
          }
        }
      }
    }
    q = tmp
  }

  return -1
}

// another

/**
 * @param {number[][]} mat
 * @return {number}
 */
const minFlips = function (mat) {
  const X = mat.length
  const Y = mat[0].length
  const binary = {
    0: 1,
    1: 2,
    2: 4,
    3: 8,
    4: 16,
    5: 32,
    6: 64,
    7: 128,
    8: 256,
  }
  const mask = []
  let state = 0
  for (let i = 0; i < X; ++i) {
    for (let j = 0; j < Y; ++j) {
      let bit = 0
      state += mat[i][j] * binary[Y * i + j]
      bit += binary[Y * i + j]
      if (i > 0) {
        bit += binary[Y * (i - 1) + j]
      }
      if (i < X - 1) {
        bit += binary[Y * (i + 1) + j]
      }
      if (j > 0) {
        bit += binary[Y * i + (j - 1)]
      }
      if (j < Y - 1) {
        bit += binary[Y * i + (j + 1)]
      }
      mask.push(bit)
    }
  }
  if (state === 0) return 0
  const set = new Set()
  const q = [{ state: state, moves: 0 }]
  while (q.length !== 0) {
    const cur = q.shift()
    if (cur.state === 0) {
      return cur.moves
    }
    for (let i = 0; i < X * Y; ++i) {
      let newState = cur.state
      newState ^= mask[i]
      if (!set.has(newState)) {
        set.add(newState)
        q.push({ state: newState, moves: cur.moves + 1 })
      }
    }
  }
  return -1
}
