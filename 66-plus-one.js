/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  let p = true
  let delta = 1
  for(let i = digits.length - 1; i >= 0 && p; i--) {
    let sum = digits[i] + delta
    if (sum >= 10) p = true
    else p = false
    digits[i] = sum % 10
  }
  if(p) digits.unshift(1)
  return digits
};
