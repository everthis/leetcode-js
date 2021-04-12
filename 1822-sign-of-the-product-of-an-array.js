/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = function(nums) {
  let pos = 0, neg = 0, zero = 0
  for(let e of nums) {
    if(e > 0) pos++
    else if(e < 0) neg++
    else zero++
  }
  if(zero > 0) return 0
  if(neg % 2 === 1) return -1
  else return 1
};
