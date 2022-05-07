/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function(parent, s) {
  const n = parent.length
  const hash = {}
  for(let i = 1; i < n; i++) {
    if(hash[parent[i]] == null) hash[parent[i]] = []
    hash[parent[i]].push(i)
  }

  let res = 0
  dfs(0)
  return res
  
  function dfs(i) {
    let max1 = 0, max2 = 0
    for(const j of (hash[i] || [])) {
      const len = dfs(j)
      if(s[i] === s[j]) continue
      if(len > max1) {
        const tmp = max1
        max1 = len
        max2 = tmp
      } else if(len > max2) {
        max2 = len
      }
    }
    res = Math.max(res, max1 + max2 + 1)    
    return max1 + 1
  }
};


// another

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


