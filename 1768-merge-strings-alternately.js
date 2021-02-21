/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let res = '', mark = 0, i = 0, j = 0
  while(i < word1.length && j < word2.length) {
    if(mark === 0) {
      res += word1[i++]
      mark = 1
    } else {
      res += word2[j++]
      mark = 0
    }
  }
  while(i < word1.length) res += word1[i++]
  while(j < word2.length) res += word2[j++]
  
  return res
};
