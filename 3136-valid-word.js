/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
  const set = new Set(['a', 'e', 'i', 'o', 'u'])
  let ans = true
  ans = ans && word.length >= 3
  ans =
    ans &&
    [...word].every(
      (char) =>
        (char >= '0' && char <= '9') ||
        (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z'),
    )
  ans = ans && [...word].some((char) => set.has(char.toLowerCase()))
  ans =
    ans &&
    [...word].some(
      (char) =>
        char.toLowerCase() >= 'a' &&
        char.toLowerCase() <= 'z' &&
        !set.has(char.toLowerCase()),
    )
  return ans
}
