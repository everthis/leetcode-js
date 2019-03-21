/**
 * @param {string} S
 * @return {string}
 */
const reverseOnlyLetters = function(S) {
  let start = 0
  let end = S.length - 1
  const arr = S.split("")
  while (start < end) {
    while (start < end && !chk(S.charCodeAt(start))) {
      start++
    }
    while (start < end && !chk(S.charCodeAt(end))) {
      end--
    }

    let tmp = S[end]
    arr[end] = S[start]
    arr[start] = tmp
    start++
    end--
  }
  return arr.join("")
}

function chk(num) {
  const aCode = "a".charCodeAt(0)
  const zCode = "z".charCodeAt(0)
  const ACode = "A".charCodeAt(0)
  const ZCode = "Z".charCodeAt(0)

  if ((num >= aCode && num <= zCode) || (num >= ACode && num <= ZCode)) {
    return true
  } else {
    return false
  }
}
