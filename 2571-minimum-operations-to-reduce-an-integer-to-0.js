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
function cnt(num) {
  return bitCnt(dec2bin(num))
}
/**
 * @param {number} n
 * @return {number}
 */
const minOperations = function(n) {
  let res = 0
  for(let i = 0; i < 14; i++) {
    if(cnt(n + (1 << i)) < cnt(n)) {
      res++
      n += (1 << i)
    }
  }
  
  return res + cnt(n)
};

// another


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
