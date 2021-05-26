/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
const canReach = function(s, minJump, maxJump) {
  const n = s.length
  const queue = [0]
  let mx = 0
  const { max, min } = Math
  while(queue.length) {
    const i = queue.shift()
    for(let j = max(i + minJump, mx + 1); j < min(s.length, i + maxJump + 1); j++) {
      if(s[j] === '0') {
        if(j === n - 1) return true
        queue.push(j)
      }
    }
    mx = i + maxJump
  }
  
  return false
};


// another

/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
const canReach = function(s, minJump, maxJump) {
  let n = s.length;
  const {max, min} = Math
  if (s[n - 1] != '0') return false;
  const pre_sum = Array(n + 1).fill(0);
  const check = Array(n + 1).fill(0);
  check[1] = 1;
  pre_sum[1] = 1;
  for (let i = 1; i < n; i++) {
      pre_sum[i + 1] = pre_sum[i];
      if (s[i] == '1') continue;
      if (i < minJump) continue;
      let r = i - minJump;
      let l = max(0, i - maxJump);
      if (pre_sum[r + 1] - pre_sum[l] == 0) continue;
      check[i + 1] = true;
      pre_sum[i + 1]++;
  }
  return check[n];
};

// another

/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
const canReach = function(s, minJump, maxJump) {
  const n = s.length, dp = Array(n).fill(0)
  dp[0] = 1
  let pre = 0
  for(let i = 1; i < n; i++) {
    if(i >= minJump) {
      pre += dp[i - minJump]
    }
    if(i > maxJump) pre -= dp[i - maxJump - 1]
    dp[i] = pre > 0 && s[i] === '0' ? 1 : 0
  }
  return dp[n - 1]
};
