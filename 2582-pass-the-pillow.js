/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
const passThePillow = function(n, time) {
   const k = ~~(time / (n - 1))
   const r = time % (n - 1)
   
   return k % 2 === 1 ? n - r : r + 1 
};
