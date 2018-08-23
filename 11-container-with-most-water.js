/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  const arr = [];
  const arr_len = height.length;
  for (let i = 0, j = arr_len - 1; i < j; ) {
    arr.push(Math.abs(j - i) * Math.min(height[i], height[j]));
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return Math.max.apply(Math, arr);
};
