/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res[i] = [];
  }
  let i = 0,
    j = 0,
    cur = 1;
  while (n > 0) {
    res[i][j] = cur++;
    n--;
    let step = n;
    while (step > 0) {
      res[i][++j] = cur++;
      step--;
    }
    step = n;
    while (step > 0) {
      res[++i][j] = cur++;
      step--;
    }
    step = n--;
    while (step > 0) {
      res[i][--j] = cur++;
      step--;
    }
    step = n;
    while (step > 0) {
      res[--i][j] = cur++;
      step--;
    }
    j++;
  }
  return res;
};
