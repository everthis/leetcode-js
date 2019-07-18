/**
 * @param {number[]} hours
 * @return {number}
 */
const longestWPI = function(hours) {
  const N = hours.length;
  const seen = new Map();
  let res = 0;
  let score = 0;
  for (let i = 0; i < N; i++) {
    score += hours[i] > 8 ? 1 : -1;
    if (score > 0) {
      res = i + 1;
    } else {
      if (!seen.has(score)) {
        seen.set(score, i);
      }
      if (seen.has(score - 1)) {
        res = Math.max(res, i - seen.get(score - 1));
      }
    }
  }
  return res;
};
