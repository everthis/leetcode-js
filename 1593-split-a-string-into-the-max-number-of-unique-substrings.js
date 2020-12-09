/**
 * @param {string} s
 * @return {number}
 */
const maxUniqueSplit = function(s) {
  return bt(s, '', 0, new Set())
};

function bt(str, cur, idx, useds) {
  if(idx === str.length) return useds.size
  cur += str[idx]
  if(useds.has(cur)) return bt(str, cur, idx +1, useds)
  else {
    let ans = 0
    useds.add(cur)
    ans = Math.max(ans, bt(str, '', idx+1, useds))
    useds.delete(cur)
    ans = Math.max(ans, bt(str, cur, idx+1, useds))
    return ans
  }
}

// another

/**
 * @param {string} s
 * @return {number}
 */
const maxUniqueSplit = function (s) {
  const N = s.length
  let ans = -1
  let curr = new Set()
  const backtrack = (pos) => {
    if (pos === N) {
      ans = Math.max(ans, curr.size)
      return
    }
    if (curr.size + (N - pos) <= ans) return
    for (let i = pos + 1; i <= N; i++) {
      const a = s.slice(pos, i)
      if (curr.has(a)) continue
      curr.add(a)
      backtrack(i)
      curr.delete(a)
    }
  }

  backtrack(0)
  return ans
}

