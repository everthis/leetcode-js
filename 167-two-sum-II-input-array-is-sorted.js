/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
  const res = [];
  let remaining;
  let next = 0;
  for (let i = 0; i < numbers.length; i++) {
    remaining = target - numbers[i];
    next = i + 1;
    while (next < numbers.length && numbers[next] <= remaining) {
      if (numbers[next] === remaining) {
        res.push(i + 1, next + 1);
        break;
      }
      next += 1;
    }
  }

  return res;
};
