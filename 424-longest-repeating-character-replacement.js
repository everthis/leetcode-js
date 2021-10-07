/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function(s, k) {
  const len = s.length;
  const count = Array(26).fill(0);
  let start = 0,
    maxCount = 0,
    maxLength = 0;
  const ca = "A".charCodeAt(0);
  for (let end = 0; end < len; end++) {
    maxCount = Math.max(maxCount, ++count[s.charCodeAt(end) - ca]);
    if (end - start + 1 - maxCount > k) {
      count[s.charCodeAt(start) - ca]--;
      start++;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));


// another

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function (s, k) {
  const freq = Array(26).fill(0),
    n = s.length,
    { max } = Math,
    A = 'A'.charCodeAt(0)
  let res = 0,
    l = 0,
    r = 0,
    maxFreq = 0
  while (r < n) {
    maxFreq = max(maxFreq, ++freq[s.charCodeAt(r) - A])
    if (r - l + 1 - maxFreq > k) {
      freq[s.charCodeAt(l) - A]--
      l++
    }
    res = max(res, r - l + 1)
    r++
  }

  return res
}

