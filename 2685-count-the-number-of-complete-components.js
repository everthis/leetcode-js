/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
  const ma = Array(n).fill(0).map((_, idx) => idx)
  const e = {}
  for (const [x, y] of edges) {
    e[x] ??= new Set()
    e[x].add(y)
    e[y] ??= new Set()
    e[y].add(x)
    merge(x, y)
  }
  const f = []; const fs = {}
  for (let i = 0; i < n; i++) {
    s = get(i)
    f.push(s)
    fs[s] ??= []
    fs[s].push(i)
  }

  let ans = 0
  for (const [_, t] of Object.entries(fs)) {
    let ok = true
    for (let i = 0; i < t.length; i++) {
      if (!ok) break
      for (let j = i + 1; j < t.length; j++) {
        if (!e[t[i]].has(t[j])) {
          ok = false
          break
        }
      }
    }
    ans += ok
  }
  return ans
  
  function get(x) {
    if (ma[x] === x) return x
    return ma[x] = get(ma[x])
  }
  function merge (x, y) {
    const fx = get(x); const fy = get(y)
    ma[fx] = fy
  }
};
