/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
const survivedRobotsHealths = function (positions, healths, directions) {
  const p = positions,
    h = healths,
    d = directions
  let m = {},
    res = Array(p.length).fill(0)
  p.map((x, i) => (m[x] = d[i] == 'R' ? [h[i], i] : [-h[i], i]))
  let a = []
  for (const k in m) a.push(m[k])
  let v = asteroidCollision(a)
  for (const [x, i] of v) res[i] = Math.abs(x)
  return res.filter((x) => x != 0)
}

function asteroidCollision(a) {
  let st = []
  for (const [x, i] of a) {
    st.push([x, i])
    let l, li, sl, sli
    if (st.length >= 1) [l, li] = st[st.length - 1]
    if (st.length >= 2) [sl, sli] = st[st.length - 2]
    while (st.length >= 2 && l < 0 && sl > 0) {
      st.pop()
      st.pop()
      let add, idx
      if (-l > sl) {
        add = -(-l - 1)
        idx = li
      } else if (-l < sl) {
        add = sl - 1
        idx = sli
      }
      if (add) st.push([add, idx])
      if (st.length >= 1) [l, li] = st[st.length - 1]
      if (st.length >= 2) [sl, sli] = st[st.length - 2]
    }
  }
  return st
}
