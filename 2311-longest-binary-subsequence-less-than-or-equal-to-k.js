/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestSubsequence = function(s, k) {
    let val = 0, pow = 1, oneNum = 0
    for(let i = s.length - 1; i >= 0 && val + pow <= k; i--) {
        if(s[i] === '1') {
            oneNum++
            val += pow
        }
        pow <<= 1
    }
    return cnt(s, '0') + oneNum
   function cnt(s, t) {
     let res = 0
     for(const e of s) {
         if(e === '0') res++
     }
     return res
   }
};
