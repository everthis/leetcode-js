/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function (s) {
  let starPos = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      starPos.push(i)
    }
  }
  let toDel = new Set(starPos)
  if (starPos.length === 0) {
    return s
  }
  let chsPos = Array.from({ length: 26 }, () => [])
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      for (let j = 0; j < 26; j++) {
        if (chsPos[j].length > 0) {
          toDel.add(chsPos[j].pop())
          break
        }
      }
    } else {
      chsPos[s.charCodeAt(i) - 'a'.charCodeAt(0)].push(i)
    }
  }
  let t = ''
  for (let i = 0; i < s.length; i++) {
    if (!toDel.has(i)) {
      t += s[i]
    }
  }
  return t
}
