/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const minArea = function(image, x, y) {
  const m = image.length,
    n = image[0].length;
  const left = searchColumns(0, y, 0, m, true);
  const right = searchColumns(y + 1, n, 0, m, false);
  const top = searchRows(0, x, left, right, true);
  const bottom = searchRows(x + 1, m, left, right, false);
  return (right - left) * (bottom - top);
  function searchColumns(i, j, top, bottom, opt) {
    while (i != j) {
      let k = top,
        mid = ((i + j) >> 1);
      while (k < bottom && image[k][mid] === "0") ++k;
      if (k < bottom === opt) j = mid;
      else i = mid + 1;
    }
    return i;
  }
  function searchRows(i, j, left, right, opt) {
    while (i != j) {
      let k = left,
        mid = ((i + j) >> 1);
      while (k < right && image[mid][k] === "0") ++k;
      if (k < right === opt) j = mid;
      else i = mid + 1;
    }
    return i;
  }
};
