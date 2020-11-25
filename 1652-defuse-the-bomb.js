/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = function(code, k) {
  const res = new Array(code.length).fill(0);
  if (k === 0) return res;
  let start = 1, end = k, sum = 0;
  if (k < 0) {
    k = -k;
    start = code.length - k;
    end = code.length - 1;
  }
  for (let i = start; i <= end; i++) sum += code[i];
  for (let i = 0; i < code.length; i++) {
    res[i] = sum;
    sum -= code[(start++) % code.length];
    sum += code[(++end) % code.length];
  }
  return res;
};
