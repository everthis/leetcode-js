/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
const distMoney = function(money, children) {
  let m = money, n = children
  if(m < n) return -1
  let res = 0
  for(let num = 1; num <= n && num * 8 <= m; num++) {
    if(valid(num)) res = num
  }
  
  return res
  
  function valid(num) {
    if(m < num * 8) return false
    let remain = m - num * 8
    let slots = n - num
    if(slots === 0 && remain) return false
    if(slots > remain) return false
    remain = remain - slots
    if(remain === 3 && slots === 1) return false
    return true
  }
  
};
