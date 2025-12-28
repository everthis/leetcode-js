/**
 * @param {number} k
 * @return {number}
 */
var minAllOneMultiple = function(k) {
  if(k % 2 === 0 ||  k % 5 === 0) return -1
  let rem = 0

  for(let i = 1; i <= 1e5; i++) {
      rem = (rem * 10 + 1) % k
      if(rem === 0) return i
  }

  return -1
};
