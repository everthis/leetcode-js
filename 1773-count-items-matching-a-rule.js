/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = function(items, ruleKey, ruleValue) {
  let res = 0
  for(let e of items) {
    if(helper(e, ruleKey, ruleValue)) res++
  }
  return res
};

function helper(e, k, v) {
  const [t, c, n] = e
  if(k === 'type' && v === t) {
    return true
  } else if(k === 'color' && v === c) {
    return true
  } else if(k === 'name' && v === n) {
    return true
  }
  
  return false
  
}
