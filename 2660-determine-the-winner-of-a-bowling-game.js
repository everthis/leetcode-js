/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
   const n =  player1.length
   let sum1 = 0, sum2 = 0
   // 1
   for(let i = 0; i < n; i++) {
     const cur = player1[i]
     sum1 += cur
     if( (i >= 1 && player1[i - 1] === 10) || (i >= 2 && player1[i - 2] === 10) ) {
       sum1 += cur
     }
   }
   
   
   // 2
  for(let i = 0; i < n; i++) {
     const cur = player2[i]
     sum2 += cur
     if( (i >= 1 && player2[i - 1] === 10) || (i >= 2 && player2[i - 2] === 10) ) {
       sum2 += cur
     }
   }
  
   return sum1 === sum2 ? 0 : (sum1 > sum2 ? 1 : 2)
};
