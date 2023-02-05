/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
const vowelStrings = function(words, queries) {
  const n = words.length
  const pre = Array(n + 1).fill(0)
  const set = new Set(['a', 'e', 'i', 'o', 'u'])
  for(let i = 0; i < n; i++) {
    const cur = words[i]
    if(set.has(cur[0]) && set.has(cur[cur.length - 1])) pre[i + 1] = 1
  }
  
  const cnt = Array(n + 1).fill(0)
  for(let i = 1; i <= n; i++) {
    cnt[i] = cnt[i - 1] + pre[i]
  }
  
  const res = []
  
  for(const [l, r] of queries) {
    res.push(cnt[r + 1] - cnt[l])
  }
  
  return res
};
