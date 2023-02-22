/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minimumScore = function(s, t) {
    let sl = s.length, tl = t.length, k = tl - 1;
    const dp = new Array(tl).fill(-1);
    for (let i = sl - 1; i >= 0 && k >= 0; --i) {
      if (s.charAt(i) === t.charAt(k)) dp[k--] = i;
    }
    let res = k + 1;
    for (let i = 0, j = 0; i < sl && j < tl && res > 0; ++i) {
        if (s.charAt(i) === t.charAt(j)) {
            while(k < tl && dp[k] <= i) k++
            j++
            res = Math.min(res, k - j);
        }      
    }

    return res;
};
