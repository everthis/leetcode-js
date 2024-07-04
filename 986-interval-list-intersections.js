/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} A
 * @param {Interval[]} B
 * @return {Interval[]}
 */
const intervalIntersection = function (A, B) {
  const intersection = []
  let i = (j = 0)
  while (i < A.length && j < B.length) {
    const min = Math.max(A[i][0], B[j][0])
    const max = Math.min(A[i][1], B[j][1])
    if (min <= max) intersection.push([min, max])
    A[i][1] > B[j][1] ? j++ : i++
  }
  return intersection
}

// another

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
const intervalIntersection = function(firstList, secondList) {
    const res = [];
    let i = 0;
    let j = 0;
    while (i < firstList.length && j < secondList.length) {
        const [start1, end1] = firstList[i];
        const [start2, end2] = secondList[j];
        if (start1 <= end2 && start2 <= end1) {
            res.push([Math.max(start1, start2), Math.min(end1, end2)]);
        }
        if (end1 < end2) {
            i++;
        } else {
            j++;
        }
    }
    return res;
};
