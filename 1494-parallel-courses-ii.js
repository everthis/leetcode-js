/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number} k
 * @return {number}
 */
const minNumberOfSemesters = function(n, relations, k) {
  const limit = (1 << n)
  const dp = Array(limit).fill(Number.MAX_SAFE_INTEGER)
  const preCourse = Array(n).fill(0)
  const preState = Array(limit).fill(0)
  
  for(const [s, d] of relations) {
    preCourse[d - 1] |= (1 << (s - 1))
  }
  for(let state = 0; state < limit; state++) {
    for(let i = 0; i < n; i++) {
      if(state & (1 << i)) {
        preState[state] |= preCourse[i]
      }
    }
    if(preState[state] === 0 && bitCnt(state) <= k) dp[state] = 1
  }
  dp[0] = 0
  for(let state = 1; state < limit; state++) {
    for(let sub = state; sub >= 0; sub = (sub - 1) & state) {
      if(
        bitCnt(state) - bitCnt(sub) <= k &&
        ((preState[state] & sub) === preState[state])
      ) {
        // console.log('d', state, sub, dp)
        dp[state] = Math.min(dp[state], dp[sub] + 1)
      }
      if(sub === 0) break
    }
  }
  
  // console.log(limit)
  return dp[limit - 1]
};

function bitCnt(num) {
  let res = 0
  while(num) {
    res++
    num &= (num - 1)
  }
  return res
}

// another

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

// another

/**
 * @param {number} n
 * @param {number[][]} dependencies
 * @param {number} k
 * @return {number}
 */
const minNumberOfSemesters = function (n, dependencies, k) {
  const pre = Array(n).fill(0)
  const limit = 1 << n
  for(const [p, v] of dependencies) {
    pre[v - 1] |= (1 << (p - 1))
  }
  const dp = Array(limit).fill(Infinity)
  dp[0] = 0
  
  for(let learned = 0; learned < limit; learned++) {
    let wait = 0
    for(let i = 0; i < n; i++) {
      if( (learned & pre[i]) === pre[i]) {
        wait |= (1 << i)
      }
    }
    wait = wait & (~learned)
    for(let sub = wait; sub; sub = (sub - 1) & wait) {
      if(bitCnt(sub) > k) continue
      const mask = learned | sub
      dp[mask] = Math.min(dp[mask], dp[learned] + 1)
    }
  }
  
  return dp[limit - 1]
}

function bitCnt(num) {
  let res = 0
  while(num) {
    num &= (num - 1)
    res++
  }
  
  return res
}



