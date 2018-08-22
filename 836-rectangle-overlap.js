/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
const isRectangleOverlap = function(rec1, rec2) {
  return !(
    chkOverlap(rec1, rec2) === false || chkOverlap(rec2, rec1) === false
  );
};
function chkOverlap(r1, r2) {
  if (r1[2] <= r2[0] || r1[3] <= r2[1]) {
    return false;
  } else {
    return true;
  }
}

console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]));
console.log(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1]));
