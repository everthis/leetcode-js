/**
 * @param {string} s
 * @param {string} t
 * @param {number} flipCost
 * @param {number} swapCost
 * @param {number} crossCost
 * @return {number}
 */
var minimumCost = function(s, t, flipCost, swapCost, crossCost) {
    let c0 = 0; // count of positions where s[i] = '0' and t[i] = '1'
    let c1 = 0; // count of positions where s[i] = '1' and t[i] = '0'

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            if (s[i] === '0') {
                c0++;
            } else {
                c1++;
            }
        }
    }

    // Option 1: Flip all mismatched bits individually
    const res1 = (c0 + c1) * flipCost;

    // Option 2: Swap matching pairs (min(c0, c1) swaps) and flip the rest
    const res2 = Math.min(c0, c1) * swapCost + Math.abs(c0 - c1) * flipCost;

    // Option 3: Swap matching pairs, then handle remaining with cross-swaps if beneficial
    const diff = Math.abs(c0 - c1);
    const res3 = Math.min(c0, c1) * swapCost 
                 + Math.floor(diff / 2) * (swapCost + crossCost) 
                 + (diff % 2) * flipCost;

    return Math.min(res1, res2, res3);  
};
