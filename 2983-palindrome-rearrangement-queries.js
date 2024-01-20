function canMakePalindromeQueries(s, queries) {
  const n = s.length
  // Prefix sum (difference)
  const psd = [0]
  for (let i = 0, j = n - 1; i < j; i++, j--) {
    psd.push(psd[psd.length - 1] + (s[i] !== s[j] ? 1 : 0))
  }
  // Prefix sum (count)
  const cnt = new Array(26).fill(0)
  const psc = [cnt.slice()]
  for (const c of s) {
    cnt[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
    psc.push([...cnt])
  }
  const ans = []
  for (const q of queries) {
    const a1 = q[0],
      b1 = q[1] + 1,
      a2 = n - q[0],
      b2 = n - 1 - q[1]
    const c1 = q[2],
      d1 = q[3] + 1,
      c2 = n - q[2],
      d2 = n - 1 - q[3]
    // No difference allowed outside the query ranges
    if (
      (min(a1, d2) && psd[min(a1, d2)]) ||
      (n / 2 > max(b1, c2) && psd[Math.floor(n / 2)] - psd[max(b1, c2)]) ||
      (d2 > b1 && psd[d2] - psd[b1]) ||
      (a1 > c2 && psd[a1] - psd[c2])
    ) {
      ans.push(false)
    } else {
      // Intersection of query ranges in the lower half must equate to that in the upper half
      const ix1 = psc[d1].map((val, i) => val - (psc[c1][i] || 0))
      const ix2 = psc[b1].map((val, i) => val - (psc[a1][i] || 0))
      if (a1 > d2) {
        ix1.forEach(
          (val, i) => (ix1[i] -= psc[Math.min(a1, c2)][i] - (psc[d2][i] || 0)),
        )
      }
      if (c2 > b1) {
        ix1.forEach(
          (val, i) => (ix1[i] -= psc[c2][i] - (psc[Math.max(b1, d2)][i] || 0)),
        )
      }
      if (c1 > b2) {
        ix2.forEach(
          (val, i) => (ix2[i] -= psc[Math.min(c1, a2)][i] - (psc[b2][i] || 0)),
        )
      }
      if (a2 > d1) {
        ix2.forEach(
          (val, i) => (ix2[i] -= psc[a2][i] - (psc[Math.max(d1, b2)][i] || 0)),
        )
      }
      ans.push(ix1.every((val, i) => val >= 0 && val === ix2[i]))
    }
  }
  return ans
}

// Helper functions
function min(a, b) {
  return a < b ? a : b
}

function max(a, b) {
  return a > b ? a : b
}
