/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let output = "";
  for (let i = 1; i <= numRows; i++) {
    let j = i - 1;
    let maxIncrement = 2 * numRows - 2;
    let increment = 2 * numRows - 2 - 2 * j;
    if (increment === 0) {
      increment = maxIncrement;
    } else {
      increment = maxIncrement - increment;
    }
    for (j; j < s.length; j += increment) {
      output += s[j];
      if (maxIncrement !== increment) {
        increment = maxIncrement - increment;
      }
    }
  }
  return output;
};
