/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
const isSumEqual = function(firstWord, secondWord, targetWord) {
  let str = 'abcdefghij'
  const hash = {}, reverse = {}
  for(let i = 0; i < str.length; i++) {
    hash[str[i]] = i
    reverse[i] = str[i]
  }
  let len1 = firstWord.length, len2 = secondWord.length
  if (len1 < len2) return isSumEqual(secondWord, firstWord, targetWord)
  // len1 >= len2
  if (len1 > len2) {
    for(let i = len1 - len2; i > 0; i--) {
      secondWord = 'a' + secondWord
    }
  }
  let res = '', inc = 0
  for(let i = len1 - 1; i >= 0; i--) {
    const tmp = hash[firstWord[i]] + hash[secondWord[i]] + inc
    if (tmp > 9) {
      inc = 1
    } else {
      inc = 0
    }
    const cur = tmp % 10
    res = reverse[cur] + res
  }
  
  if(inc) res = 'b' + res
  // console.log(res)
  let r1 = '', r2 = ''
  for(let i = 0; i < targetWord.length; i++) {
    r1 = r1 + hash[targetWord[i]]
  }
  for(let i = 0; i < res.length; i++) {
    r2 = r2 + hash[res[i]]
  }
  return (+r1) === (+r2)
};
