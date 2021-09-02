function  numberOfCombinations( num) {
  let dp = Array(3501).fill(0), dpp=Array(3501).fill(0), pf=Array(3501).fill(0), n = num.length, mod = 1000000007;
  for (let l = 1; l <= n; ++l) {
       dpp[0] = 1;
      for (let i = n; i - l > 0; --i)
          pf[i - 1] = num[i - 1 - l] == num[i - 1] ? pf[i] + 1 : 0;
      for (let i = 0; i < n; ++i) {
          dp[i + 1] = dpp[i + 1];
          if (l <= i + 1 && num[i + 1 - l] != '0') {
              if (i + 1 - 2 * l >= 0 && (pf[i + 1 - l] >= l || num[i + 1 - l + pf[i + 1 - l]] > num[i + 1 - 2 * l + pf[i + 1 - l]]))                    
                  dp[i + 1] = (dp[i + 1] + dp[i + 1 - l]) % mod;
              else
                  dp[i + 1] = (dp[i + 1] + dpp[i + 1 - l]) % mod;
          }
      }
      let tmp = dpp
      dpp = dp
      dp = tmp
  }    
  return dpp[n];
}
