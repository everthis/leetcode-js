/**
 * @param {character[][]} seats
 * @return {number}
 */
const maxStudents = function (seats) {
  if (!seats.length) return 0
  const lastPos = 1 << seats[0].length
  const classroom = seats.map((row) =>
    row.reduce((a, c, i) => (c === '#' ? a : a | (1 << i)), 0)
  )
  const dp = new Array(seats.length + 1).fill(null).map(() => new Map())
  dp[0].set(0, 0)
  for (let row = 0; row < seats.length; row++) {
    let queue = [0]
    let numStudents = 0
    while (queue.length > 0) {
      const next = []
      for (let arrangement of queue) {
        let max = 0
        for (let [prevArrang, count] of dp[row]) {
          if (conflicts(prevArrang, arrangement)) continue
          max = Math.max(max, count + numStudents)
        }
        dp[row + 1].set(arrangement, max)
        for (let i = 1; i < lastPos; i <<= 1) {
          if (canSit(classroom[row], arrangement, i)) next.push(arrangement | i)
        }
      }
      queue = next
      numStudents++
    }
  }
  return Math.max(...dp[seats.length].values())
}
function conflicts(prev, curr) {
  return prev & (curr << 1) || prev & (curr >> 1)
}
function canSit(row, arrangement, newStudent) {
  return (
    row & newStudent &&
    !(arrangement & newStudent) &&
    !(arrangement & (newStudent << 1)) &&
    !(arrangement & (newStudent >> 1))
  )
}

// another

/**
 * @param {character[][]} seats
 * @return {number}
 */
const maxStudents = function (seats) {
  const m = seats.length
  const n = seats[0].length
  const validity = []
  for (let i = 0; i < m; i++) {
    let cur = 0
    for (let j = 0; j < n; j++) {
      cur = (cur << 1) + (seats[i][j] === '.' ? 1 : 0)
    }
    validity.push(cur)
  }
  const f = Array.from({ length: m + 1 }, () => Array(1 << n).fill(-1))
  f[0][0] = 0
  for (let i = 1; i <= m; i++) {
    const valid = validity[i - 1]
    for (let j = 0; j < 1 << n; j++) {
      if ((j & valid) === j && !(j & (j >> 1))) {
        for (let k = 0; k < 1 << n; k++) {
          if (!(j & (k >> 1)) && !((j >> 1) & k) && f[i - 1][k] !== -1) {
            f[i][j] = Math.max(f[i][j], f[i - 1][k] + bitCount(j))
          }
        }
      }
    }
  }
  return Math.max(...f[m])
}
function bitCount(n) {
  const res = n.toString(2).match(/1/g)
  return res === null ? 0 : res.length
}

