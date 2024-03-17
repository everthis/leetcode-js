/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(word, k) {
  let freq = new Array(26).fill(0);
  let deleted = 0;
  let ans = word.length;
  
  for (let i = 0; i < word.length; i++) {
    freq[word.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  
  freq.sort((a, b) => a - b);
  
  for (let i = 0; i < freq.length; i++) {
    let res = deleted;
    let minFreq = freq[i];
    
    for (let j = freq.length - 1; j > i; j--) {
      if (freq[j] - minFreq <= k) {
        break;
      }
      
      res += freq[j] - minFreq - k;
    }
    
    ans = Math.min(ans, res);
    deleted += freq[i];
  }
  
  return ans;
};
