/**
 * @param {string[]} equations
 * @return {boolean}
 */
const equationsPossible = function(equations) {
    const uf = new Array(26).fill(0);
    const aCode = ('a').charCodeAt(0)

    for (let i = 0; i < 26; ++i) uf[i] = i;
    for (let e of equations)
        if (e.charAt(1) === '=')
            uf[find(e.charCodeAt(0) - aCode)] = find(e.charCodeAt(3) - aCode);
    for (let e of equations)
        if (e.charAt(1) === '!' && find(e.charCodeAt(0) - aCode) === find(e.charCodeAt(3) - aCode))
            return false;
    return true;


    function find(x) {
        if (x != uf[x]) uf[x] = find(uf[x]);
        return uf[x];
    }
};


// another

/**
 * @param {string[]} equations
 * @return {boolean}
 */
const equationsPossible = function(equations) {
  const num = 26
  const visited = new Array(num).fill(false)
  const color = new Array(num).fill(-1)
  const adj = Array.from(new Array(num), el => [])
  const aCode = ('a').charCodeAt(0)
  for(let el of equations) {
    if(el[1] === '=') {
      adj[el[0].charCodeAt(0) - aCode].push(el[3].charCodeAt(0) - aCode)
      adj[el[3].charCodeAt(0) - aCode].push(el[0].charCodeAt(0) - aCode)
    }
  }
  let c = 0
  for(let i = 0; i < num; i++) {
    !visited[i] && dfs(i, c)
    c++
  }
  for(let el of equations) {
    if(el[1] === '!' && color[el[0].charCodeAt(0) - aCode] === color[el[3].charCodeAt(0) - aCode]) {
      return false
    }
  }
  return true
  
  function dfs(idx, val) {
    visited[idx] = true
    color[idx] = val
    for(let el of adj[idx]) {
      !visited[el] && dfs(el, val)
    }
  }
};
