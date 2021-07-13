/**
 * @param {number} n
 * @return {number}
 */
const rotatedDigits = function(n) {
   const dp = new Array(n + 1).fill(0);
    let count = 0;
    for(let i = 0; i <= n; i++){
      if(i < 10){
        if(i == 0 || i == 1 || i == 8) dp[i] = 1;
        else if(i == 2 || i == 5 || i == 6 || i == 9){
          dp[i] = 2;
          count++;
        }
      } else {
        let a = dp[~~(i / 10)], b = dp[i % 10];
        if(a == 1 && b == 1) dp[i] = 1;
        else if(a >= 1 && b >= 1){
          dp[i] = 2;
          count++;
        }
      }
    }
    return count; 
};
