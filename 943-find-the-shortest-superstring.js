/**
 * @param {string[]} A
 * @return {string}
 */
const shortestSuperstring = function(arr) {
  while (arr.length > 1) {
    let maxCommonLength = 0
    let maxCommonString = arr[0] + arr[1]
    let maxCommonWords = [arr[0], arr[1]]
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        const { commonLength, commonString } = checkCommonPair(arr[i], arr[j])
        if (commonString && commonLength >= maxCommonLength) {
          maxCommonLength = commonLength
          maxCommonString = commonString
          maxCommonWords = [arr[i], arr[j]]
        }
      }
    }
    arr = arr.filter(
      word => word !== maxCommonWords[0] && word !== maxCommonWords[1]
    )
    arr.unshift(maxCommonString)
  }
  return arr[0]
}

const checkCommonPair = function(s1, s2) {
  let maxCommonLength = 0
  let commonString = ''
  if (s1.length > s2.length) s1, (s2 = s2), s1
  for (let stringLength = 1; stringLength < s1.length; stringLength++) {
    const s1Suffix = s1.substring(s1.length - stringLength)
    const s2Prefix = s2.substring(0, stringLength)
    if (s1Suffix === s2Prefix && stringLength > maxCommonLength) {
      maxCommonLength = stringLength
      commonString = s1 + s2.substring(stringLength)
    }
  }
  for (let stringLength = 1; stringLength < s1.length; stringLength++) {
    const s1Prefix = s1.substring(0, stringLength)
    const s2Suffix = s2.substring(s2.length - stringLength)
    if (s1Prefix === s2Suffix && stringLength > maxCommonLength) {
      if (stringLength > maxCommonLength) {
        maxCommonLength = stringLength
        commonString = s2 + s1.substring(stringLength)
      }
    }
  }

  return {
    commonLength: maxCommonLength,
    commonString
  }
}
