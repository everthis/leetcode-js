/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
const superPow = function(a, b) {
   const base = 1337
   function powmod(a, k) {
     a %= base
     let res = 1
     for(let i = 0; i < k; i++) res = res * a % base
     return res
   }
   if(b.length === 0) return 1
   const last = b.pop()
   return powmod(superPow(a, b), 10) * powmod(a, last) % base
}; 
