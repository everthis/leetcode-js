/**
 * @param {number} n
 * @param {number[][]} conflictingPairs
 * @return {number}
 */
var maxSubarrays = function (n, conflictingPairs) {
  const best = new Array(n + 2).fill(n + 1)
  const second = new Array(n + 2).fill(n + 1)
  const freq = new Array(n + 2).fill(0)

  for (const pair of conflictingPairs) {
    let [a, b] = pair
    if (a > b) {
      ;[a, b] = [b, a]
    }
    if (b < best[a]) {
      second[a] = best[a]
      best[a] = b
      freq[a] = 1
    } else if (b === best[a]) {
      freq[a]++
    } else if (b < second[a]) {
      second[a] = b
    }
  }

  const F = new Array(n + 2).fill(0)
  const M = new Array(n + 2).fill(0)
  F[n + 1] = n + 1
  F[n] = best[n]
  M[n] = n
  for (let i = n - 1; i >= 1; i--) {
    if (best[i] <= F[i + 1]) {
      F[i] = best[i]
      M[i] = i
    } else {
      F[i] = F[i + 1]
      M[i] = M[i + 1]
    }
  }

  let origTotal = 0
  for (let i = 1; i <= n; i++) {
    origTotal += F[i] - i
  }

  const indicesByM = Array.from({ length: n + 2 }, () => [])
  for (let i = 1; i <= n; i++) {
    const idx = M[i]
    indicesByM[idx].push(i)
  }

  const rmq = new RMQ(best, n)
  let bestTotal = origTotal

  for (let a = 1; a <= n; a++) {
    if (best[a] === n + 1) continue
    if (freq[a] > 1) continue
    const B = best[a]
    const newB = second[a]
    const T = a < n ? F[a + 1] : n + 1
    const effectiveCandidate = Math.min(newB, T)
    if (effectiveCandidate <= B) continue

    let delta = 0
    for (const i of indicesByM[a]) {
      const curOld = B
      let candidate
      if (i < a) {
        candidate = rmq.query(i, a - 1)
      } else {
        candidate = n + 1
      }
      const newVal = Math.min(candidate, effectiveCandidate)
      let improvement = newVal - curOld
      if (improvement < 0) improvement = 0
      delta += improvement
    }
    const candidateTotal = origTotal + delta
    bestTotal = Math.max(bestTotal, candidateTotal)
  }

  return bestTotal
}

class RMQ {
  constructor(arr, n) {
    this.n = n
    this.log = new Array(n + 2).fill(0)
    for (let i = 2; i <= n; i++) {
      this.log[i] = this.log[Math.floor(i / 2)] + 1
    }
    const K = this.log[n] + 1
    this.st = Array.from({ length: n + 1 }, () => new Array(K).fill(0))
    for (let i = 1; i <= n; i++) {
      this.st[i][0] = arr[i]
    }
    for (let j = 1; j < K; j++) {
      for (let i = 1; i + (1 << j) - 1 <= n; i++) {
        this.st[i][j] = Math.min(
          this.st[i][j - 1],
          this.st[i + (1 << (j - 1))][j - 1],
        )
      }
    }
  }

  query(L, R) {
    if (L > R) return Infinity
    const j = this.log[R - L + 1]
    return Math.min(this.st[L][j], this.st[R - (1 << j) + 1][j])
  }
}
