/**
 * @param {string[]} words
 * @return {number[]}
 */
const longestCommonPrefix = (words) => {
  const n = words.length
  const ans = new Array(n).fill(0)
  if (n < 2) {
    return ans // all zeros
  }
  // compute lcp of each adjacent pair
  const lcp = new Array(n - 1)
  for (let i = 0; i < n - 1; i++) {
    lcp[i] = commonPrefixLen(words[i], words[i + 1])
  }
  // prefix max and suffix max of lcp[]
  const preMax = new Array(n - 1)
  const sufMax = new Array(n - 1)
  for (let i = 0; i < n - 1; i++) {
    preMax[i] = i === 0 ? lcp[i] : Math.max(preMax[i - 1], lcp[i])
  }
  for (let i = n - 2; i >= 0; i--) {
    sufMax[i] = i === n - 2 ? lcp[i] : Math.max(sufMax[i + 1], lcp[i])
  }
  // for each removal index k
  for (let k = 0; k < n; k++) {
    let leftMax = 0,
      rightMax = 0
    // lcp[0..k-2]
    if (k - 2 >= 0) leftMax = preMax[k - 2]
    // lcp[k+1..n-2]
    if (k + 1 <= n - 2) rightMax = sufMax[k + 1]
    let best = Math.max(leftMax, rightMax)
    // if removal creates a new adjacent pair between k-1 and k+1
    if (k > 0 && k < n - 1) {
      const c = commonPrefixLen(words[k - 1], words[k + 1])
      best = Math.max(best, c)
    }
    ans[k] = best
  }
  return ans
}

function commonPrefixLen(a, b) {
  const m = Math.min(a.length, b.length)
  let i = 0
  while (i < m && a.charAt(i) === b.charAt(i)) {
    i++
  }
  return i
}
