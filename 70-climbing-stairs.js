/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  const hash = {};
  return single(n, hash);
};

function single(i, hash) {
  if (hash.hasOwnProperty(i)) {
    return hash[i];
  }
  if (i === 1) {
    hash[1] = 1;
    return 1;
  }
  if (i === 2) {
    hash[2] = 2;
    return 2;
  }
  hash[i] = single(i - 1, hash) + single(i - 2, hash);
  return hash[i];
}
