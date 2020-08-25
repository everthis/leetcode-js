/**
 * @param {number} n
 * @param {number[][]} dependencies
 * @param {number} k
 * @return {number}
 */
const minNumberOfSemesters = function (n, dependencies, k) {
  const preq = new Array(n).fill(0)
  for (let dep of dependencies) {
    // to study j, what are the prerequisites?
    // each set bit is a class that we need to take. ith bit means ith class
    // -1 because classes are 1 to n
    preq[dep[1] - 1] |= 1 << (dep[0] - 1)
  }
  const dp = new Array(1 << n).fill(n)
  dp[0] = 0
  for (let i = 0; i < 1 << n; i++) {
    // we are now at status i. we can "influence" a later status from this status
    let canStudy = 0 // what are the classes we can study?
    for (let j = 0; j < n; j++) {
      // a & b== b means b is a's subset
      // so if preq[j] is i's subset, we can now study j given status i
      if ((i & preq[j]) == preq[j]) {
        canStudy |= 1 << j
      }
    }
    canStudy &= ~i
    // take out i, so that we only enumerate a subset canStudy without i.
    // note we will | later so here we need a set that has no
    // intersection with i to reduce the enumeration cost
    for (let sub = canStudy; sub > 0; sub = (sub - 1) & canStudy) {
      // we can study one or more courses indicated by set "canStudy".
      // we need to enumerate all non empty subset of it.
      // This for loop is a typical way to enumerate all subsets of a given set "canStudy"
      // we studied i using dp[i] semesters. now if we also study the
      // subset sub, we need dp [i ]+1 semesters,
      // and the status we can "influence" is dp[ i | sub] because at
      // that state, we studied what we want to study in "sub"
      if (bitCount(sub) <= k) {
        dp[i | sub] = Math.min(dp[i | sub], dp[i] + 1)
      }
    }
  }
  return dp[(1 << n) - 1]
}
function bitCount(n) {
  n = n - ((n >> 1) & 0x55555555)
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
  return (((n + (n >> 4)) & 0xf0f0f0f) * 0x1010101) >> 24
}
