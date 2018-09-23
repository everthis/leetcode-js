/**
 * @param {number[]} arr
 * @return {number}
 */
const maxChunksToSorted = function(arr) {
  const clonedArr = arr.slice(0);
  let sum1 = 0;
  let sum2 = 0;
  let res = 0;
  clonedArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
    sum2 += clonedArr[i];
    if (sum1 === sum2) res += 1;
  }
  return res;
};
