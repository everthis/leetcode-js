function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
function bitCnt(s) {
  let res = 0
  for(const e of s) {
    if(e === '1') res++
  }
  return res
}
/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
  if(n === 0) return 0  
  if(bitCnt(dec2bin(n)) === 1) return 1
  const lowBit = n & -n
  let low = minOperations(n + lowBit);
  let high = minOperations(n - lowBit);
  return Math.min(low, high) + 1;
};
