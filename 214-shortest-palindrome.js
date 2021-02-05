/**
 * @param {string} s
 * @return {string}
 */
const shortestPalindrome = function(s) {
  let j = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) === s.charAt(j)) { j += 1; }
  }
  if (j === s.length) { return s; }
  let suffix = s.substring(j);
  return suffix.split('').reverse().join('') + shortestPalindrome(s.substring(0, j)) + suffix;
};

// another

/**
 * @param {string} s
 * @return {string}
 */
const shortestPalindrome = function (s) {
  const tmp = s + '#' + s.split('').reverse().join('')
  const fail = getFail(tmp)
  return (
    s
      .split('')
      .slice(fail[fail.length - 1])
      .reverse()
      .join('') + s
  )
}

function getFail(s) {
  const n = s.length
  const table = new Array(n).fill(0)
  let index = 0
  for (let i = 1; i < n; ) {
    if (s.charAt(index) === s.charAt(i)) {
      table[i] = ++index
      i++
    } else {
      if (index > 0) {
        index = table[index - 1]
      } else {
        index = 0
        i++
      }
    }
  }
  return table
}

