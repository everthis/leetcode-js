/**
 * @param {number[]} A
 * @return {number}
 */
const numberOfArithmeticSlices = function(A) {
  const arr = [];
  let count = 0;
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] - A[i - 1] === A[i + 1] - A[i]) {
      count += 1;
    } else {
      arr.push(count);
      count = 0;
    }
  }
  arr.push(count);
  return arr.reduce((ac, el) => ac + calc(el), 0);
};

function calc(num) {
  return (num * (num + 1)) / 2;
}

console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
