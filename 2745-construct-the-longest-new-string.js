/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var longestString = function(x, y, z) {
  // x + y
  // y + x
  // y + z
  // z + z
  let res = 0
  const {min} = Math
  const minXY = min(x, y)
  if(x === y) res = 2 * x + 2 * y + 2 * z
  else {
    res = (minXY * 2 + (minXY + 1) * 2 + 2 * z)
  }

  return res
};

// another

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
const longestString = function(x, y, z) {
   const base = Math.min(x, y)
   let extra = 0
   if(x !== y) {
     extra = 1
   }
  
   return (base * 2 + z + extra) * 2
};
