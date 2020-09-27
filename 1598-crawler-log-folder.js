/**
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = function(logs) {
  const stack = []
  for(let i = 0, len = logs.length; i < len; i++) {
    const e= logs[i]
    if(e === '../') {
      stack.pop()
    } else if (e === './') {
      
    } else {
      stack.push(e)
    }
  }
  return stack.length
};
