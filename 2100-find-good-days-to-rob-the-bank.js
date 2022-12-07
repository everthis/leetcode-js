/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
const goodDaysToRobBank = function(security, time) {
   const n = security.length, sec = security
   const pre = Array(n).fill(0), post = Array(n).fill(0)
   
   const res = []
   let num = 0
   for(let i = 1; i < n; i++) {
     if(sec[i]  <= sec[i - 1]) {
       num++
     } else {
       num = 0
     }
     pre[i] = num
   }
  
   num = 0
   for(let i = n - 2; i >= 0; i--) {
     if(sec[i] <= sec[i + 1]) {
       num++
     } else {
       num = 0
     }
     post[i] = num
   }
  
    // console.log(pre, post)
   for(let i = 0; i < n; i++) {
     if(pre[i] >= time && post[i] >= time) {
       res.push(i)
     }
   }
   
   return res
};
