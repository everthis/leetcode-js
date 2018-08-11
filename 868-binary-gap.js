/**
 * @param {number} N
 * @return {number}
 */
const binaryGap = function(N) {
  const bin = (N >>> 0).toString(2);
  const idxArr = [];
  for (let i = 0; i < bin.length; i++) {
    const num = bin.charAt(i);
    if (num === "1") {
      idxArr.push(i);
    }
  }
  let maxConLen = 0;
  for (let idx = 0; idx < idxArr.length - 1; idx++) {
    if (idxArr[idx + 1] - idxArr[idx] > maxConLen) {
      maxConLen = idxArr[idx + 1] - idxArr[idx];
    }
  }

  return maxConLen;
};
