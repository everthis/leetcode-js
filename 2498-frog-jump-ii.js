/**
 * @param {number[]} stones
 * @return {number}
 */
var maxJump = function(stones) {
  let res = stones[1]-stones[0]; 
  const {max} = Math
  for(let i = 3; i < stones.length; i+=2) res = max(res, stones[i]-stones[i-2]);
  for(let i = 2; i < stones.length; i+=2) res = max(res, stones[i]-stones[i-2]);
  return res; 
};
