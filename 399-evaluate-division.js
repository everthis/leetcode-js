/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = function(equations, values, queries) {
  const m = {};
  for (let i = 0; i < values.length; i++) {
    if (!m.hasOwnProperty(equations[i][0])) m[equations[i][0]] = {};
    if (!m.hasOwnProperty(equations[i][1])) m[equations[i][1]] = {};
    m[equations[i][0]][equations[i][1]] = values[i];
    m[equations[i][1]][equations[i][0]] = 1 / values[i];
  }
  const r = [];
  for (let i = 0; i < queries.length; i++) {
    r[i] = dfs(queries[i][0], queries[i][1], 1, m, []);
  }
  return r;
};

function dfs(s, t, r, m, seen) {
  if (!m.hasOwnProperty(s) || !hsetAdd(seen, s)) return -1;
  if (s === t) return r;
  let next = m[s];
  for (let c of Object.keys(next)) {
    let result = dfs(c, t, r * next[c], m, seen);
    if (result !== -1) return result;
  }
  return -1;
}

function hsetAdd(arr, el) {
  if (arr.indexOf(el) === -1) {
    arr.push(el);
    return true;
  } else {
    return false;
  }
}
