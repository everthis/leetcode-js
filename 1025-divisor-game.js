/**
 *  * @param {number} N
 *   * @return {boolean}
 *    */
const divisorGame = function(N) {
   let idx = 0  
   let x
   while(x = chk(N)) {
     idx++
     N = N - x
   }
   if(idx === 0) return false
   return idx % 2 === 1 ? true : false
};

function chk(num) {
   for(let i = 1; i < num; i++) {
      if(num % i === 0) return i
   }
   return false
}
