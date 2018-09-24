/**
 * @param {string} S
 * @return {number[][]}
 */
const largeGroupPositions = function(S) {
  if (S.length === 0) return [];
  let prevChar = S[0];
  let curChar = S[0];
  let curStartIdx = 0;
  let curCount = 1;
  const res = [];
  let tmpChar;
  for (let i = 1; i < S.length; i++) {
    tmpChar = S[i];
    if (tmpChar === prevChar) {
      curCount += 1;
    } else {
      if (curCount >= 3) {
        res.push([curStartIdx, curStartIdx + curCount - 1]);
      }

      prevChar = S[i];
      curStartIdx = i;
      curCount = 1;
    }
  }

  if (curCount >= 3) {
    res.push([curStartIdx, curStartIdx + curCount - 1]);
  }

  return res;
};

console.log(largeGroupPositions("aaa"));
console.log(largeGroupPositions("abbxxxxzzy"));
console.log(largeGroupPositions("abcdddeeeeaabbbcd"));
