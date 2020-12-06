/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = function(nums, k) {
   const m = new Map()
   let res = 0
   for(let e of nums) {
     if(!m.has(e)) m.set(e, 0)
     if(m.has(k - e) && m.get(k - e)) {
       res++
       m.set(k - e, m.get(k - e) - 1)
     } else {
       m.set(e, m.get(e) + 1)
     }
   }
   return res;
};
