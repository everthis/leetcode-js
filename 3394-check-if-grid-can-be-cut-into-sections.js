/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function(n, rectangles) {
    const vertical = [];
    const horizontal = [];
    for (const it of rectangles) {
        vertical.push([it[1], it[3]])
        horizontal.push([it[0], it[2]])
    }
    const mergeH = mergeIntervals(horizontal);
    const mergeV = mergeIntervals(vertical);
    return mergeH.length >= 3 || mergeV.length >= 3;  
};
function mergeIntervals(intervals) {
    if (intervals.length <= 1) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [];
    merged.push(intervals[0]);
    for (let i = 1; i < intervals.length; ++i) {
        if (intervals[i][0] < merged[merged.length - 1][1]) {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intervals[i][1]);
        } else {
            merged.push(intervals[i]);
        }
    }
    return merged;
}
