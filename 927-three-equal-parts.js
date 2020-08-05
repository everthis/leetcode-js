/**
 * @param {number[]} A
 * @return {number[]}
 */
const threeEqualParts = function (A) {
  let countNumberOfOnes = 0
  for (let c of A) if (c === 1) countNumberOfOnes++
  if (countNumberOfOnes === 0) return [0, A.length - 1]
  if (countNumberOfOnes % 3 != 0) return [-1, -1]
  const k = countNumberOfOnes / 3
  let i
  // find the first 1 in the array
  for (i = 0; i < A.length; i++) if (A[i] == 1) break
  let start = i
  // find (k+1)th 1 in the array
  let count1 = 0
  for (i = 0; i < A.length; i++) {
    if (A[i] == 1) count1++
    if (count1 == k + 1) break
  }
  let mid = i
  //find (2*k +1)th 1 in the array
  count1 = 0
  for (i = 0; i < A.length; i++) {
    if (A[i] === 1) count1++
    if (count1 === 2 * k + 1) break
  }
  let end = i
  // Match all values till the end of the array
  while (end < A.length && A[start] === A[mid] && A[mid] === A[end]) {
    start++
    mid++
    end++
  }
  // Return appropriate values if all the values have matched till the end
  if (end == A.length) return [start - 1, mid]
  // otherwise, no such indices found
  return [-1, -1]
}
