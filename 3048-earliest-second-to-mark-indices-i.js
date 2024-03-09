/**
 * @param {number[]} nums
 * @param {number[]} changeIndices
 * @return {number}
 */
var earliestSecondToMarkIndices = function(nums, changeIndices) {
  let isPossible = function (mid) {
    let last = new Uint16Array(nums.length);
    for (let i = 0; i <= mid; ++i) last[changeIndices[i]] = i;

    let count = 0, marked = 0;
    for (let i = 0; i <= mid; ++i) {
      if (last[changeIndices[i]] === i) {
        count -= nums[changeIndices[i]];
        if (count < 0) return false;
        ++marked;
      } else {
        ++count;
      }
    }
    return marked === nums.length;
  };

  changeIndices = changeIndices.map((x) => x - 1);
  let l = 0, r = changeIndices.length - 1;
  while (l < r) {
    let mid = (l + r) >> 1;
    isPossible(mid) ? r = mid : l = mid + 1;
  }
  return isPossible(l) ? l + 1 : -1;
};
