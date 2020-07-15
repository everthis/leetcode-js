/**
 * @param {string} str
 * @returns {string}
 */
const reverseWords = function(str) {
  return str
    .trim()
    .split(/\s+/)
    .reverse()
    .join(" ");
};

// another

/**
 * @param {string} str
 * @returns {string}
 */
const reverseWords = function (s) {
  let sb = ''
  const n = s.length
  let i = n - 1
  while (i >= 0) {
    if (s.charAt(i) == ' ') {
      i--
      continue
    }
    let j = i - 1
    while (j >= 0 && s.charAt(j) != ' ') j--
    sb += ' '
    sb += s.slice(j + 1, i + 1)
    i = j - 1
  }
  if (sb.length > 0) sb = sb.slice(1)
  return sb
}
