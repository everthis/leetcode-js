/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
const longestObstacleCourseAtEachPosition = function(obstacles) {
  const n = obstacles.length
  const stack = [], res = Array(n).fill(0)
  let m = 0
  let j = 0;
  for (let x of obstacles) {
    let i = chk(x);
    if (i == m) {
      ++m;
      stack.push(x);
    } else {
      stack[i] = x;
    }
    res[j++] = i + 1;
  }
  return res;
  function chk(x) {
      if (m && stack[m - 1] <= x) return m;
      let l = 0, r = m - 1;
      while (l < r) {
        let m = (l + r) >> 1;
        if (stack[m] > x) {
          r = m;
        } else {
          l = m + 1;
        }
      }
      return l;
  }
};

