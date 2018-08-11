/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = function(ops) {
  const opArr = ["C", "D", "+"];
  const arr = [];
  ops.forEach((el, idx) => {
    const item = {
      value: 0,
      valid: true
    };
    switch (el) {
      case "C":
        findValid(arr, idx, 1).forEach(el => {
          el.value = 0;
          el.valid = false;
        });
        item.valid = false;
        break;
      case "D":
        item.value = findValid(arr, idx, 1)[0].value * 2;
        break;
      case "+":
        item.value = findValid(arr, idx, 2).reduce(
          (ac, ele) => ac + ele.value,
          0
        );
        break;
      default:
        item.value = +el;
        break;
    }
    arr.push(item);
  });
  return arr.reduce((ac, el) => ac + el.value, 0);
};

function findValid(arr, idx, backStep) {
  const res = [];
  while (backStep > 0 && idx - 1 >= 0) {
    if (arr[idx - 1].valid === true) {
      backStep -= 1;
      res.push(arr[idx - 1]);
    }
    idx -= 1;
  }
  return res;
}

console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
