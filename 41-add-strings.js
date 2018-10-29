/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function(num1, num2) {
  let sb = "";
  let carry = 0;
  for (
    let i = num1.length - 1, j = num2.length - 1;
    i >= 0 || j >= 0 || carry == 1;
    i--, j--
  ) {
    let x = i < 0 ? 0 : +num1.charAt(i);
    let y = j < 0 ? 0 : +num2.charAt(j);
    sb = (+(x + y + carry) % 10) + sb;
    carry = x + y + carry >= 10 ? 1 : 0;
  }
  return sb;
};
