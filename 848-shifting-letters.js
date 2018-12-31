/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
const shiftingLetters = function(S, shifts) {
  let suffixSum = 0,
    result = "";
  for (let i = S.length - 1; i >= 0; i--) {
    suffixSum += shifts[i];
    let ascii = S[i].charCodeAt() - 97;
    result = String.fromCharCode(97 + ((ascii + suffixSum) % 26)) + result;
  }
  return result;
};
