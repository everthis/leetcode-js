/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a.end - b.end)
    let count = 0
    let end = Number.MIN_SAFE_INTEGER
    const len = intervals.length
    for(let el of intervals) {
        if(el.start >= end) {
            end = el.end
            count++
        }
    }
    return len - count
};
