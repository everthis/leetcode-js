/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
  let res = 0
  for(const e of hours) {
    if(e >= target) res++
  }
  
  return res
};
