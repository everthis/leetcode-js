/**
 * @param {string} p
 * @return {number}
 */
const findSubstringInWraproundString = function(p) {
    // count[i] is the maximum unique substring end with ith letter.
    // 0 - 'a', 1 - 'b', ..., 25 - 'z'.
    const count = new Array(26).fill(0);

    // store longest contiguous substring ends at current position.
    let maxLengthCur = 0; 

    for (let i = 0; i < p.length; i++) {
        if (i > 0
            && (p.charCodeAt(i) - p.charCodeAt(i - 1) === 1 
            || (p.charCodeAt(i - 1) - p.charCodeAt(i) === 25))) {
            maxLengthCur++;
        }
        else {
            maxLengthCur = 1;
        }

        let index = p.charCodeAt(i) - ('a').charCodeAt(0);
        count[index] = Math.max(count[index], maxLengthCur);
    }

    // Sum to get result
    let sum = 0;
    for (let i = 0; i < 26; i++) {
        sum += count[i];
    }
    return sum;
};
