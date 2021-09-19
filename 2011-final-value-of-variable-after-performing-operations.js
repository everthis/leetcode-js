/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = function(operations) {
  let res = 0
  for(let op of operations) {
    if(op.indexOf('++') !== -1) res++
    else res--
  }
  
  return res
};
