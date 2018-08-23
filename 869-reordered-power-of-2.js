/**
 * @param {number} N
 * @return {boolean}
 */
const reorderedPowerOf2 = function(N) {
  const A = count(N);
  for (let i = 0; i < 31; i++) {
    if (arrayEqual(A, count(1 << i))) return true;
  }
  return false;
};

function count(num) {
  const res = [];
  while (num > 0) {
    addOne(res, num % 10);
    num = parseInt(num / 10);
  }
  return res;
}
function addOne(arr, idx) {
  if (arr[idx]) {
    arr[idx] += 1;
    return;
  }
  arr[idx] = 1;
}
function arrayEqual(a1, a2) {
  return JSON.stringify(a1) === JSON.stringify(a2);
}

console.log(reorderedPowerOf2(1));
console.log(reorderedPowerOf2(10));
console.log(reorderedPowerOf2(16));
console.log(reorderedPowerOf2(24));
console.log(reorderedPowerOf2(46));
