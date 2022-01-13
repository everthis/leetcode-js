/**
 * @param {string} s
 * @return {string[]}
 */
const removeInvalidParentheses = function(s) {
  const res = []
  helper(s, 0, 0, ['(', ')'])
  return res

  function helper(str, lastI, lastJ, pair) {
    let openNum = 0, closeNum = 0
    for(let i = lastI; i < str.length; i++) {
      if(str[i] === pair[0]) openNum++
      if(str[i] === pair[1]) closeNum++
      if(closeNum > openNum) {
        for(let j = lastJ; j <= i; j++) {
          if(str[j] === pair[1] && (j === lastJ || str[j - 1] !== pair[1])) {
            helper(str.slice(0, j) + str.slice(j + 1), i, j, pair)
          }
        }
        return
      }
    }
    let rev = str.split('').reverse().join('')
    if(pair[0] === '(') {
      helper(rev, 0, 0, [')', '('])
    } else {
      res.push(rev)
    }
  }
};

// another

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
