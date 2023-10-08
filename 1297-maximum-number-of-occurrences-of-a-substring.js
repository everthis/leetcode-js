/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
function maxFreq(s, maxLetters, k, maxSize) {
    let count = new Map();
    for (let i = 0; i <= s.length - k; i++) {
        let substring = s.slice(i, i + k);
        if (!count.has(substring)) {
            count.set(substring, 0);
        }
        count.set(substring, count.get(substring) + 1);
    }
    let maxFreq = 0;
    for (let [substring, freq] of count) {
        if (new Set(substring).size <= maxLetters) {
            maxFreq = Math.max(maxFreq, freq);
        }
    }
    return maxFreq;
}
