/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeightII = function(stones) {
  let sum=stones.reduce((a,b)=>a+b)
  let dp=Array(sum+1).fill(0)
  dp[0]=1
  for(let i=0;i<stones.length;i++){
    let cur=stones[i]
    for(let j=dp.length-1;j>=0;j--){
      if(j-stones[i]<0)break
      if(dp[j-stones[i]]){
        dp[j]=1
      }
    }
  }

  let minLen=Infinity
  for(let i=0;i<dp.length;i++){
    if(dp[i]){
      if(i*2-sum>=0)minLen=Math.min(minLen,i*2-sum)
    }
  }
  return minLen
};
