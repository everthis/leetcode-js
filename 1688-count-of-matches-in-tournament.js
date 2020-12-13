/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
  const obj = { res: 0 }
  helper(n, obj)
  return obj.res
};

function helper(num, obj) {
  if(num <= 1) return
  const odd = num % 2 === 1
  if(odd) {
    const tmp = Math.floor((num - 1) / 2) 
    obj.res += tmp
    helper(tmp + 1, obj)
  } else {
    const tmp = Math.floor(num / 2) 
    obj.res += tmp
    helper(tmp, obj)
  }
}
