/**
 * @param {string} S
 * @return {string[]}
 */
const expand = function(S) {
  const arr = []
  let cur = ''
  for (let i = 0, len = S.length; i < len; i++) {
    const ch = S.charAt(i)
    if (ch === '{') {
      if (cur) arr.push(cur)
      cur = []
    } else if (ch === '}') {
      arr.push(cur.sort())
      cur = ''
    } else if (ch === ',') {
    } else {
      if (typeof cur === 'string' || cur === '') {
        cur += ch
      } else {
        cur.push(ch)
      }
    }
  }
  arr.push(cur)
  const res = []
  bt(arr, 0, '', res)
  return res
}
function bt(arr, i, cur, res) {
  if (i === arr.length) {
    res.push(cur)
    return
  }
  if (typeof arr[i] === 'string') {
    cur += arr[i]
    bt(arr, i + 1, cur, res)
  } else {
    for (let j = 0, len = arr[i].length; j < len; j++) {
      let bak = cur
      cur += arr[i][j]
      bt(arr, i + 1, cur, res)
      cur = bak
    }
  }
}
