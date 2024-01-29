/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flowerGame = function(n, m) {
  let res = 0
  let oddNum = 0, evenNum = 0
  let oddNum1 = 0, evenNum1 = 0
  for(let i = 1; i <= n; i++) {
    if(i % 2 === 1) oddNum++
    else evenNum++
  }
  for(let i = 1; i <= m; i++) {
    if(i % 2 === 1) oddNum1++
    else evenNum1++
  }
  res += oddNum * evenNum1
  res += evenNum * oddNum1
  
  return res
};
