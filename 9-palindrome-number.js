/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  if (x < 0) return false;
  const rev = reverseNum(x);
  return x === rev;
};

function reverseNum(num) {
  let n = num;
  let rev = 0;
  let dig;
  while (num > 0) {
    dig = num % 10;
    rev = rev * 10 + dig;
    num = Math.floor(num / 10);
  }
  return rev;
}
