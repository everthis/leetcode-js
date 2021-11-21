const isPalindrome = (s) => { let n = s.length; let i = 0; let j = n - 1; while (i < j) { if (s[i++] != s[j--]) return false; } return true; };

const int = parseInt;
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var kMirror = function(k, n) {
    let res = 0;
    for (let len = 1; ; len++) {
        let min = 10 ** ((len - 1) >> 1), max = 10 ** ((len + 1) >> 1);
        for (let base = min; base < max; base++) {
            let x = base;
            for (let i = len & 1 ? int(base / 10) : base; i > 0; i = int(i / 10)) {
                x = x * 10 + i % 10;
            }
            let s = x.toString(k);
            if (isPalindrome(s)) {
                res += x;
                n--;
                if (!n) return res;
            }
        }
    }  
};
