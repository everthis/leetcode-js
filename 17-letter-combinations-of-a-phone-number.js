/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
  if (digits === "") {
    return [];
  }
  const charMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  };
  const res = [];
  const matrix = [];
  for (let i = 0; i < digits.length; i++) {
    matrix.push(charMap[digits.charAt(i)]);
  }
  let tmp = matrix[0];
  for (let j = 1; j < matrix.length; j++) {
    tmp = helper(matrix, j, tmp);
  }
  return tmp;
};
function helper(matrix, rowIdx, arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const preStr = arr[i];
    for (let j = 0; j < matrix[rowIdx].length; j++) {
      res.push(`${preStr}${matrix[rowIdx][j]}`);
    }
  }
  return res;
}
