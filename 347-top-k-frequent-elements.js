/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
  const hash = {};
  nums.forEach(el => {
    if (hash.hasOwnProperty(el)) {
      hash[el] += 1;
    } else {
      hash[el] = 1;
    }
  });

  const arr = Object.entries(hash).sort((a, b) => b[1] - a[1]);
  const res = [];
  for (let i = 0; i < k; i++) {
    res.push(+arr[i][0]);
  }
  return res;
};
