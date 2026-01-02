/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
    const n = s.length;
    let ans = 0;
    let i = 0;

    while (i < n) {
        let j = i;
        while (j < n && s[j] === s[i]) j++;
        ans = Math.max(ans, j - i);
        i = j;
    }

    const best2 = (x, y, third) => {
        let best = 0;
        let i = 0;
        while (i < n) {
            if (s[i] === third) { i++; continue; }
            const st = i;
            let bal = 0;
            const fst = new Map();
            fst.set(0, st);
            let j = st;
            while (j < n && s[j] !== third) {
                bal += s[j] === x ? 1 : -1;
                if (!fst.has(bal)) fst.set(bal, j + 1);
                else best = Math.max(best, j + 1 - (fst.get(bal)));
                j++;
            }
            i = j;
        }
        return best;
    };

    ans = Math.max(ans, best2('a', 'b', 'c'));
    ans = Math.max(ans, best2('a', 'c', 'b'));
    ans = Math.max(ans, best2('b', 'c', 'a'));

    let ca = 0, cb = 0, cc = 0;
    const mp = new Map();
    mp.set("0,0", -1);

    for (let i = 0; i < n; i++) {
        if (s[i] === 'a') ca++;
        else if (s[i] === 'b') cb++;
        else cc++;
        const key = `${ca - cb},${ca - cc}`;
        if (mp.has(key)) ans = Math.max(ans, i - mp.get(key));
        else mp.set(key, i);
    }

    return ans;
};
