/**
 * @param {string} binary
 * @return {string}
 */
const maximumBinaryString = function(binary) {
   let n = binary.length;
    const {max} = Math
    let nums = [];
    for (let i = 0; i < n; ++i) {
      nums.push(+binary[i]);
    }
    for (let i = 0, j = 0; i < n - 1; ++i) {
      if (nums[i] == 1) continue;
      if (nums[i + 1] == 0) {
        nums[i] = 1;
        continue;
      }
      j = max(j, i + 1);
      while (j < n && nums[j]) ++j;
      if (j === n) break;
      nums[j++] = 1;
      nums[i + 1] = 0;
      nums[i] = 1;
    }
    let res = "";
    for (let i = 0; i < n; ++i) {
      res += (nums[i] + '');
    }
    return res;
};
