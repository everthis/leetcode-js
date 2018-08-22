/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElement = function(findNums, nums) {
  const map = {};
  const stack = [];
  for (let num of nums) {
    while (stack.length && stack[stack.length - 1] < num) {
      let tmp = stack.pop();
      map[tmp] = num;
    }
    stack.push(num);
  }
  for (let i = 0; i < findNums.length; i++) {
    findNums[i] = map[findNums[i]] == null ? -1 : map[findNums[i]];
  }

  return findNums;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
console.log(nextGreaterElement([1, 2, 3], [9, 8, 7, 3, 2, 1, 6]));
