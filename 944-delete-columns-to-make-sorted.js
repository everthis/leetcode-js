/**
 * @param {string[]} A
 * @return {number}
 */
const minDeletionSize = function(A) {
  // increment this if we find a
  // column that is out of order
  let numColumnsToDelete = 0;

  // all strings in the array
  // are the same length
  const strLength = A[0].length;

  // outer loop checks entire string
  for (let i = 0; i < strLength; i++) {
    // inner loop checks the colunns
    for (let j = 0; j < A.length - 1; j++) {
       const top = A[j][i];
       const bottom = A[j + 1][i];

       if (top > bottom) {
          numColumnsToDelete++;
          break;
        }
      }
    }
    return numColumnsToDelete;
};
