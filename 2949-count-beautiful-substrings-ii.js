/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var beautifulSubstrings = function(s, k) {
    let ans = 0, cur = 0;
    let mp = new Map();
    mp.set(0, [-1]);
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
            cur++;
        } else {
            cur--;
        }
        for (let x of (mp.get(cur) || []) ) {
            let d = (i - x) / 2;
            if (Math.pow(d, 2) % k === 0) {
                ans++;
            }
        }
        if (!mp.has(cur)) mp.set(cur, []);
        mp.get(cur).push(i);
    }
    return ans;
};
