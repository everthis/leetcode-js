/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var maxSubstringLength = function (s, k) {
    const n = s.length;
    const first = Array(26).fill(-1);
    const last = Array(26).fill(-1);
    
    for (let i = 0; i < n; i++) {
        const c = s.charCodeAt(i) - 'a'.charCodeAt(0);
        if (first[c] === -1) first[c] = i;
        last[c] = i;
    }

    const intervals = [];
    for (let i = 0; i < n; i++) {
        const c = s.charCodeAt(i) - 'a'.charCodeAt(0);
        if (i !== first[c]) continue;

        let j = last[c];
        for (let k = i; k <= j; k++) {
            j = Math.max(j, last[s.charCodeAt(k) - 'a'.charCodeAt(0)]);
        }

        let flag = true;
        for (let k = i; k <= j; k++) {
            if (first[s.charCodeAt(k) - 'a'.charCodeAt(0)] < i) {
                flag = false;
                break;
            }
        }
        if (!flag) continue;

        if (i === 0 && j === n - 1) continue;

        intervals.push([i, j]);
    }

    intervals.sort((a, b) => a[1] - b[1]);

    let cnt = 0;
    let currend = -1;
    for (const i of intervals) {
        if (i[0] > currend) {
            cnt++;
            currend = i[1];
        }
    }

    return cnt >= k;
}
