/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function(s, wordDict) {
    const len = s.length;
    const dp = new Array(len).fill(false);

    for (let i = 0; i < len; i++) {
        for (let word of wordDict) {
            if (word.length <= i + 1 
                && s.substring(i - word.length + 1, i + 1) === word) {
                let index = i - word.length;
                if (index < 0)  {
                    dp[i] =  true;
                } else {
                    dp[i] = dp[index];
                }
                if(dp[i]) break;
            }
        }
    }

    return dp[len - 1];
};
