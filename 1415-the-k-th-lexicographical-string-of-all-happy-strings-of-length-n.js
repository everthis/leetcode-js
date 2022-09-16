/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
  const res = []
  dfs()
  return res.length === k ? res[res.length - 1] : ''
  function dfs(path = '') {
    if(res.length === k) return
    if(path.length === n) {
      res.push(path)
      return
    }
    for(const e of 'abc') {
      if(path === '' || e !== path[path.length - 1]) {
        dfs(path + e)
      }
    }
  }
};
