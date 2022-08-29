/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
const distributeCookies = function(cookies, k) {
  const n = cookies.length
  let res = Infinity
  const arr = Array(n).fill(0)

  bt(0)
  return res
  
  function bt(idx) {
    if(idx === n) {
      res = Math.min(res, Math.max(...arr))
      return
    }
    const cur = cookies[idx]
    const visited = new Set()
    for(let i = 0; i < k; i++) {
      const e = arr[i]
      if(visited.has(arr[i])) continue
      if(cur + e >= res) continue
      visited.add(arr[i])
      arr[i] += cur
      bt(idx + 1)
      arr[i] -= cur
      if(arr[i] === 0) break
    }
  }
};
