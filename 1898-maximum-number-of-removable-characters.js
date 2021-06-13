/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
const maximumRemovals = function (s, p, removable) {
  const n = removable.length
  let l = 0,
    r = n
  while (l < r) {
    let mid = (l + r + 1) >> 1
    if (is_valid(s, p, removable, mid)) l = mid
    else r = mid - 1
  }
  return l
}

function is_valid(s, p, removable, cnt) {
  let len1 = s.length,
    len2 = p.length
  const check = Array(len1).fill(0)
  for (let i = 0; i < cnt; i++) check[removable[i]] = 1
  let ind1 = 0,
    ind2 = 0
  while (ind1 < len1 && ind2 < len2) {
    if (s[ind1] != p[ind2] || check[ind1]) {
      ind1++
      continue
    }
    ind1++, ind2++
  }
  return ind2 == len2
}
