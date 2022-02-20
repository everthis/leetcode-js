/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
  let res = 0
  for(let i = 1; i <= num; i++) {
    const tmp = sum(i)
    if(tmp % 2 === 0) res++
  }
  
  return res
};

function sum(e) {
  let res = 0
  while(e) {
    res += e % 10
    e = Math.floor(e/10)
  }
  return res
}
