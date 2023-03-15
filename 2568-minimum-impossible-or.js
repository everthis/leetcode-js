/**
 * @param {number[]} nums
 * @return {number}
 */
var minImpossibleOR = function(nums) {
  const s = new Set();
  for (const e of nums) s.add(e);
  let res = 1;
  while (s.has(res)) res <<= 1;
  return res;
};
