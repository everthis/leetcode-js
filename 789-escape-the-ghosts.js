/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
  let res = true 
  const { abs } = Math, steps = abs(target[0]) + abs(target[1])
  const [tx, ty] = target
  for(const [x, y] of ghosts) {
    if(abs(tx - x) + abs(ty - y) <= steps) return false
  }
  
  return res
};
