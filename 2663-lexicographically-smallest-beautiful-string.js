/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const smallestBeautifulString = function(s, k) {
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

};
