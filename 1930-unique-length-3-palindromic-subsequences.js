/**
 * @param {string} s
 * @return {number}
 */
const countPalindromicSubsequence = (s) => {
    let res = 0;
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < 26; j++) {
            let len = 0;
            for (const c of s) {
                if(len === 3) break
                if (len == 0) {
                    if (c.charCodeAt() - 97 == i) len++; // first char
                } else if (len == 1) {
                    if (c.charCodeAt() - 97 == j) len++; // second char
                } else if (len == 2) {
                    if (c.charCodeAt() - 97 == i) len++; // third char
                }
            }
            if (len == 3) res++;
        }
    }
    return res;
};
