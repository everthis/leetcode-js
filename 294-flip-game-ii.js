/**
 * @param {string} s
 * @return {boolean}
 */
const canWin = function(s) {
  const ss = s.split('')
  const len = s.length
  return chk()
  function chk() {
    for (let i = 0; i <= len - 2; i++) {
      if (ss[i] === '+' && ss[i + 1] === '+') {
        ss[i] = '-'
        ss[i + 1] = '-'
        const wins = !chk()
        ss[i] = '+'
        ss[i + 1] = '+'
        if (wins) return true
      }
    }
    return false
  }
}
