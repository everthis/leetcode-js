/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function(s, words) {
  if (words == null || words.length === 0 || !s) return []
  const wh = {}
  const slen = s.length
  const wl = words[0].length
  const len = words[0].length * words.length
  words.forEach(el => {
    if (wh[el]) wh[el]++
    else wh[el] = 1
  })
  const res = []
  for (let i = 0; i < slen - len + 1; i++) {
    if (chk(wh, s.slice(i, i + len), wl, words.length)) res.push(i)
  }
  return res
}

function chk(hash, str, wl, num) {
  const oh = {}
  for (let i = 0; i < num; i++) {
    let tmp = str.slice(i * wl, i * wl + wl)
    if (oh[tmp]) oh[tmp]++
    else oh[tmp] = 1
  }
  const keys = Object.keys(hash)
  for (let i = 0; i < keys.length; i++) {
    if (oh[keys[i]] !== hash[keys[i]]) return false
  }
  return true
}
