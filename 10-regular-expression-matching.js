/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function(s, p) {
  let memory = new Array(s.length + 1)
    .fill(0)
    .map(e => new Array(p.length + 1).fill(-1));
  return memorySearch(s, 0, p, 0, memory);
};

const memorySearch = (s, i, p, k, memory) => {
  if (memory[i][k] != -1) return memory[i][k];
  if (k == p.length) return i == s.length;

  let firstMatch = i < s.length && (s[i] == p[k] || p[k] == ".");
  if (k + 1 < p.length && p[k + 1] == "*") {
    memory[i][k] =
      (firstMatch && memorySearch(s, i + 1, p, k, memory)) ||
      memorySearch(s, i, p, k + 2, memory);
  } else {
    memory[i][k] = firstMatch && memorySearch(s, i + 1, p, k + 1, memory);
  }
  return memory[i][k];
};
