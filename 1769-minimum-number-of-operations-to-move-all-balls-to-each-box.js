/**
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations = function(boxes) {
  const res = []
  for(let i = 0, len = boxes.length; i < len; i++) {
    res[i] = helper(boxes, i)
  }

  return res
};

function helper(str, idx) {
  let res = 0
  for(let i = 0, len = str.length; i < len; i++) {
    if(i === idx || str[i] === '0') continue
    res += Math.abs(i - idx)
  }
  return res
}
