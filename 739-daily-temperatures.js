/**
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures = function(T) {
  const n = T.length;
  const sk = [];
  const res = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let cur = T[i];
    while (sk.length && T[sk[sk.length - 1]] < cur) {
      let tail = sk.pop();
      res[tail] = i - tail;
    }
    sk.push(i);
  }
  return res;
};
