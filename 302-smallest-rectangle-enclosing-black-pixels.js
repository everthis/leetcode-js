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

// another

/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const minArea = function(image, x, y) {
  let top = x,
    bottom = x
  let left = y,
    right = y
  function dfs(x, y) {
    if (
      x < 0 ||
      y < 0 ||
      x >= image.length ||
      y >= image[0].length ||
      image[x][y] === '0'
    )
      return
    image[x][y] = '0'
    top = Math.min(top, x)
    bottom = Math.max(bottom, x)
    left = Math.min(left, y)
    right = Math.max(right, y)
    dfs(x + 1, y)
    dfs(x - 1, y)
    dfs(x, y - 1)
    dfs(x, y + 1)
  }

  if (image.length === 0 || image[0].length === 0) return 0
  dfs(x, y)
  return (right - left + 1) * (bottom - top + 1)
}

