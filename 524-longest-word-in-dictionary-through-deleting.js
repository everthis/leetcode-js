/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
const findLongestWord = function(s, d) {
  let results = [];
  let maxLen = 0;
  for (const word of d) {
    let j = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === word[j]) {
        j++;
        if (j === word.length) break;
      }
    }
    if (j === word.length && word.length >= maxLen) {
      if (word.length > maxLen) {
        maxLen = word.length;
        results = [];
      }
      results.push(word);
    }
  }
  
  let result = results[0];
  for (let i = 1; i < results.length; i++) {
    if (results[i] < result) result = results[i];
  }
  return result || '';
}
