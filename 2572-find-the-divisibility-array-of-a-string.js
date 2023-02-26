/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
const divisibilityArray = function(word, m) {
  let ans = [];
  let cur = 0;
  for (let i = 0; i < word.length; i++) {
    cur = (cur * 10 + Number(word[i])) % m;
    ans.push(cur === 0 ? 1 : 0);
  }
  return ans;
};
