/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
const maxValue = function (events, k) {
  const n = events.length
  const memo = Array.from({ length: n + 1 }, () => Array(k + 1).fill(-1))
  events.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
  return helper(memo, events, n, 0, k)
}

function helper(memo, events, n, i, k) {
  if(i === n || k === 0) return 0
  if(memo[i][k] !== -1) return memo[i][k]
  let ni = i + 1
  for(; ni < n; ni++) {
    if(events[ni][0] > events[i][1]) break
  }

  return memo[i][k] = Math.max(
    helper(memo, events, n, i + 1, k),
    events[i][2] + helper(memo, events, n, ni, k - 1)
  )
}

// another

/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
const maxValue = function (events, k) {
  // d[i][j] 表示以 events[i]结尾的取最多j个最大值
  // d[i][j-1],  Math.max( d[m][j-1] + v[i]) for m ending < start[i]
  events.sort((a, b) => a[1] - b[1])
  const n = events.length
  let d = []
  for (let j = 0; j <= k; j++) {
    const newD = []
    for (let i = 0; i < n; i++) {
      if (j === 0) {
        newD[i] = 0
      } else if (j === 1) {
        newD[i] = events[i][2]
      } else if (i === 0) {
        newD[i] = events[i][2]
      } else {
        newD[i] = d[i] // 以i结尾最多取j-1次的最大值
        const v = events[i][2]
        const start = events[i][0]
        for (let m = 0; m < i; m++) {
          if (events[m][1] < start) {
            if (d[m] + v > newD[i]) {
              newD[i] = d[m] + v
            }
          } else {
            break
          }
        }
      }
    }
    d = [...newD]
  }
  return Math.max(...d)
}


// another


/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
const maxValue = function(events, k) {

        cache = new Map();
        events.sort((a,b) => a[0] - b[0]);
        return dfs(events, 0, -1, k);
    
    function dfs(events, idx, end, k){
        let key = idx + "," + end + "," + k;
        if(cache.has(key)){
            return cache.get(key);
        }
        if(idx >= events.length){
            return 0;
        }
        if(k == 0) {
            return 0;
        }
        let max = 0;
        if(events[idx][0] > end){
            max = Math.max(max, dfs(events, idx+1, events[idx][1], k-1) + events[idx][2]);
        }
        
        max = Math.max(max, dfs(events, idx+1, end, k));
        cache.set(key, max);
        return max;
    }
};
