/**
 * @param {number[]} candidates
 * @return {number}
 */
const largestCombination = function(candidates) {
  let res = 0
  for(let i = 0; i < 25; i++) {
    let tmp = 0, bit = 1 << i
    for(const e of candidates) {
      if((e & bit) !== 0) tmp++
    }
    res = Math.max(res, tmp)
  }
  return res
};
