/**
 * @param {string} S
 * @return {string}
 */
const reorganizeString = function(S) {
    if (!S || S.length <= 1) {
        return S;
    }
    const freqs = Array(26).fill(0);
    const acode = 'a'.charCodeAt(0);
    for (let i = 0, n = S.length; i < n; i++) {
        const index = S.charCodeAt(i) - acode;
        freqs[index]++;
        if (freqs[index] > Math.ceil(n / 2)) {
            return '';
        }
    }
    const list = [];
    for (let i = 0, n = S.length; i < 26; i++) {
        if (freqs[i] === 0) {
            continue;
        }
        list.push({ch: String.fromCharCode(i + acode), freq: freqs[i]});
    }
    list.sort((l1, l2) => l2.freq - l1.freq);
    const parts = [];
    for (let i = 0, n = list[0].freq; i < n; i++) {
        parts.push(list[0].ch);
    }
    let idx = 0;
    for (let i = 1, n = list.length; i < n; i++) {
        for (let j = 0, m = list[i].freq; j < m; j++) {
            idx %= list[0].freq;
            parts[idx++] += list[i].ch;
        }
    }
    return parts.join('');
};
