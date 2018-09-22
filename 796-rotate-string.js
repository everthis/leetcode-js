/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
const rotateString = function(A, B) {
  if (A.length != B.length) return false;
  return A.concat(A).includes(B);
};
