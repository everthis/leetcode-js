/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function(parent, s) {
    let n = s.length, res = 0;
    const {max} = Math
    let children = Array.from({ length: n}, () => Array());
    for (let i = 1; i < n; ++i) children[parent[i]].push(i);
    dfs(children, s, 0);
    return res;
  
    function dfs(children, s, i) {
      let big1 = 0, big2 = 0;
      for (let j of (children[i] || [])) {
        let cur = dfs(children, s, j);
        if (s[i] == s[j]) continue;
        if (cur > big2) big2 = cur;
        if (big2 > big1) {
          let tmp = big1
          big1 = big2
          big2 = tmp
        };
      }
      res = max(res, big1 + big2 + 1);
      return big1 + 1;
    }  
};


