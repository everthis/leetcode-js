/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
  let arr = ("" + num).split("");
  let res = num;

  while (arr.length > 1) {
    res = arr.reduce((ac, el) => +ac + +el, 0);
    arr = ("" + res).split("");
  }
  return +res;
};

// another

/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
  return 1 + (num - 1) % 9;
};

console.log(addDigits(0));
console.log(addDigits(38));
