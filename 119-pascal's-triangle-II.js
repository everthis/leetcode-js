/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function(rowIndex) {
  if (!rowIndex) return [1];
  if (rowIndex === 1) return [1, 1];
  const res = [1, 1];
  for (let i = 2; i <= rowIndex; i++) {
    res[i] = 1;
    for (let j = i - 1; j >= 1; j--) {
      res[j] = res[j] + res[j - 1];
    }
  }
  return res;
};
