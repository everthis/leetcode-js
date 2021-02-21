/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const longestPalindrome = function(word1, word2) {
    const sz = word1.length + word2.length
    let res = 0;
    const dp = Array.from({ length: sz + 1 }, () => Array(sz + 1).fill(0))
    longestPalindromeSubseq(word1 + word2, dp);
    for (let i = 0; i < word1.length; ++i)
        for (let j = word2.length - 1; j >= 0; --j)
            if (word1[i] == word2[j]) {
                res = Math.max(res, dp[i][word1.length + j + 1]);
                break;
            }
    return res;

}
function longestPalindromeSubseq( s, dp) {
    for (let len = 1; len <= s.length; ++len) 
        for (let i = 0; i + len <= s.length; ++i) 
            dp[i][i + len] = s[i] == s[i + len - 1] ? 
                dp[i + 1][i + len - 1] + (len == 1 ? 1 : 2) : 
                    Math.max(dp[i][i + len - 1],  dp[i + 1][i + len]);
    return dp[0][s.length];
}    


