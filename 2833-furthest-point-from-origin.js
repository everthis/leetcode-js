/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
  let u = 0
  let val = 0
  for(const e of moves) {
    if(e === '_') u++
    else if(e === 'L') val--
    else if(e === 'R') val++
  }
  return Math.abs(val) + u
};
