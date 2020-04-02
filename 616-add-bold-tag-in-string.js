/**
 * @param {string} s
 * @param {string[]} dict
 * @return {string}
 */
const addBoldTag = function (s, dict) {
  const bold = new Array(s.length)
  for (let sub of dict) {
    let found = -1
    let prevBold = 0
    while ((found = s.indexOf(sub, found + 1)) !== -1) {
      for (let i = Math.max(prevBold, found); i < found + sub.length; i++) {
        bold[i] = 1
      }
      prevBold = found + sub.length
    }
  }
  let res = ''
  let open = false
  for (let i = 0; i < s.length; i++) {
    if (bold[i] && !open) {
      open = true
      res += '<b>'
    } else if (!bold[i] && open) {
      open = false
      res += '</b>'
    }
    res += s[i]
  }
  return open ? res + '</b>' : res
}
