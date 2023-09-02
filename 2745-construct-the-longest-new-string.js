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
