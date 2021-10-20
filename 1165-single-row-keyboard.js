/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
const calculateTime = function(keyboard, word) {
  const hash = {}, { abs } = Math
  for(let i = 0; i < 26; i++) {
    hash[keyboard[i]] = i
  }
  let pre = 0, sum = 0
  for(const ch of word) {
    sum += abs(hash[ch] - pre)
    pre = hash[ch]
  }
  return sum
};
