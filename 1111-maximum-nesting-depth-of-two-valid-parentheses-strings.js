/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
  let A = 0, B = 0, n = seq.length;
  let res = Array(n).fill(0);
  for (let i = 0; i < n; ++i) {
      if (seq.charAt(i) == '(') {
          if (A < B) {
              ++A;
          } else {
              ++B;
              res[i] = 1;
          }
      } else {
          if (A > B) {
              --A;
          } else {
              --B;
              res[i] = 1;
          }
      }
  }
  return res;
};
