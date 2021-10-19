/**
 * @param {number[]} nums
 * @return {number}
 */
const largestUniqueNumber = function(nums) {
   const hash = {}
   for(let e of nums) {
     hash[e] = (hash[e] || 0) + 1
   }
   let res = -Infinity
   Object.keys(hash).forEach(k => {
     if(hash[k] === 1) {
       if(+k > res) {
         res = +k
       }
     }
   })
   return res === -Infinity ? -1 : res
};
