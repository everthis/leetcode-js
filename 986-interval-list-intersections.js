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
