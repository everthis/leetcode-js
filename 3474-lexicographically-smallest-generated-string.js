/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var generateString = function (str1, str2) {
  const n = str1.length
  const m = str2.length
  const len = n + m - 1
  const c = '*'

  const ans = new Array(len).fill(c)
  const forced = new Array(len).fill(false)

  for (let i = 0; i < n; i++) {
    if (str1[i] === 'T') {
      for (let j = 0; j < m; j++) {
        const pos = i + j
        if (ans[pos] === c) {
          ans[pos] = str2[j]
          forced[pos] = true
        } else {
          if (ans[pos] !== str2[j]) return ''
        }
      }
    }
  }

  for (let i = 0; i < len; i++) {
    if (ans[i] === c) {
      ans[i] = 'a'
    }
  }

  for (let i = 0; i < n; i++) {
    if (str1[i] === 'F') {
      let windowEqual = true
      for (let j = 0; j < m; j++) {
        if (ans[i + j] !== str2[j]) {
          windowEqual = false
          break
        }
      }
      if (windowEqual) {
        let modified = false
        for (let j = m - 1; j >= 0; j--) {
          const pos = i + j
          if (!forced[pos]) {
            ans[pos] = 'b'
            modified = true
            break
          }
        }
        if (!modified) return ''
      }
    }
  }
  return ans.join('')
}
