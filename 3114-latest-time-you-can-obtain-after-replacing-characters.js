/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function (s) {
  let l = s.split('')

  if (l[0] === '?') {
    l[0] = l[1] === '?' || parseInt(l[1]) <= 1 ? '1' : '0'
  }

  if (l[1] === '?') {
    l[1] = l[0] === '1' ? '1' : '9'
  }

  if (l[3] === '?') {
    l[3] = '5'
  }

  if (l[4] === '?') {
    l[4] = '9'
  }

  return l.join('')
}
