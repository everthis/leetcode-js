/**
 * @param {number} n
 * @return {number}
 */
const countVowelStrings = function (n) {
  let mem = [1, 1, 1, 1, 1];
  for (let i = 1; i < n; ++i) {
    const next = [0, 0, 0, 0, 0];
    let tmp = 0;
    for (let j = 4; j >= 0; --j) {
      tmp += mem[j];
      next[j] = tmp;
    }
    mem = next;
  }
  let sum = 0;
  for (let i of mem) {
    sum += i;
  }
  return sum;
};
