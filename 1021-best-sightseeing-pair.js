/**
 * @param {number[]} A
 * @return {number}
 */
const maxScoreSightseeingPair = function(A) {
    let res = 0, cur = 0;
    for (let a of A) {
        res = Math.max(res, cur + a);
        cur = Math.max(cur, a) - 1;
    }
    return res;
};
