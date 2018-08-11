/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
const shortestToChar = function(S, C) {
  const res = [];
  const idxArr = [];
  for (let i = 0; i < S.length; i++) {
    S.charAt(i) === C ? idxArr.push(i) : null;
  }
  let coordIdx = 0;
  let nextCoordIdx = 1;
  let val;
  for (let idx = 0; idx < S.length; idx++) {
    if (S.charAt(idx) === C) {
      val = 0;
      nextCoordIdx = idxArr[coordIdx + 1] == null ? coordIdx : coordIdx + 1;
      if (
        Math.abs(idxArr[coordIdx] - idx) >= Math.abs(idxArr[nextCoordIdx] - idx)
      ) {
        coordIdx = idxArr[coordIdx + 1] == null ? coordIdx : coordIdx + 1;
      }
    } else {
      nextCoordIdx = idxArr[coordIdx + 1] == null ? coordIdx : coordIdx + 1;
      if (
        Math.abs(idxArr[coordIdx] - idx) < Math.abs(idxArr[nextCoordIdx] - idx)
      ) {
        val = Math.abs(idxArr[coordIdx] - idx);
      } else {
        val = Math.abs(idxArr[nextCoordIdx] - idx);
        coordIdx = idxArr[coordIdx + 1] == null ? coordIdx : coordIdx + 1;
      }
    }
    res[idx] = val;
  }
  return res;
};

console.log(shortestToChar("aaab", "b"));
console.log(shortestToChar("bbba", "b"));
