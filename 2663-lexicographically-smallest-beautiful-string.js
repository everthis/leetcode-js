/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const smallestBeautifulString = function(s, k) {
  const n = s.length
  const original = s
  const chars = s.split(''), a = 'a'.charCodeAt(0), z = 'z'.charCodeAt(0)
  const codeToCh = code => String.fromCharCode(code)
  let flag = false
  for(let i = n - 1; i >= 0; i--) {
    const code = chars[i].charCodeAt(0)
    for(let j = code + 1; j < a + k && j <= z; j++) {
      if(!valid(i, codeToCh(j))) continue
      chars[i] = codeToCh(j)
      for(let nxt = i + 1; nxt < n; nxt++) {
        for(let c = a; c < a + k; c++) {
          if(valid(nxt, codeToCh(c))) {
            chars[nxt] = codeToCh(c)
            break
          }
        }
      }
      flag = true
      break
    }
    if(flag) break
  }
  
  const res = chars.join('')
  if(res === original) return ''
  return res
  
  function valid(idx, ch) {
    if(idx >= 1 && ch === chars[idx - 1]) return false
    if(idx >= 2 && ch === chars[idx - 2]) return false
    return true
  }
};

// another


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const smallestBeautifulString = function (s, k) {
  const chars = s.split('')

  for (let i = chars.length - 1; i >= 0; i--) {
    chars[i] = String.fromCharCode(chars[i].charCodeAt(0) + 1)
    while (containsPalindrome(chars, i)) {
      chars[i] = String.fromCharCode(chars[i].charCodeAt(0) + 1)
    }
    if (chars[i] < String.fromCharCode('a'.charCodeAt(0) + k)) {
      // If s[i] is among the first k letters, then change the letters after
      // s[i] to the smallest ones that don't form any palindrome substring.
      return changeSuffix(chars, i + 1)
    }
  }

  return ''

  // Returns true if chars[0..i] contains palindrome.
  function containsPalindrome(chars, i) {
    return (
      (i > 0 && chars[i] == chars[i - 1]) || (i > 1 && chars[i] == chars[i - 2])
    )
  }

  // Returns string where chars[i..] replaced with the smallest letters that
  // don't form any palindrome substring.
  function changeSuffix(chars, i) {
    for (let j = i; j < chars.length; j++) {
      chars[j] = 'a'
      while (containsPalindrome(chars, j)) {
        chars[j] = String.fromCharCode(chars[j].charCodeAt(0) + 1)
      }
    }
    return chars.join('')
  }
}
