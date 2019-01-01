/**
 * @param {string} s
 * @return {string[]}
 */
const removeInvalidParentheses = function(s) {
  const ans = [];
  remove(s, ans, 0, 0, ["(", ")"]);
  return ans;
};

function remove(s, ans, last_i, last_j, par) {
  for (let stack = 0, i = last_i; i < s.length; i++) {
    if (s.charAt(i) === par[0]) stack++;
    if (s.charAt(i) === par[1]) stack--;
    if (stack >= 0) continue;
    for (let j = last_j; j <= i; j++) {
      if (
        s.charAt(j) === par[1] &&
        (j === last_j || s.charAt(j - 1) != par[1])
      ) {
        remove(s.slice(0, j) + s.slice(j + 1), ans, i, j, par);
      }
    }
    return;
  }
  const reversed = s
    .split("")
    .reverse()
    .join("");
  if (par[0] === "(") {
    remove(reversed, ans, 0, 0, [")", "("]);
  } else {
    ans.push(reversed);
  }
}
