let eratosthenesSieve;

/**
 * @param {number} n
 */
function initEratosthenesSieve(n) {
  eratosthenesSieve = Array(n + 1).fill(1);
  eratosthenesSieve[0] = 0;
  eratosthenesSieve[1] = 0;

  for (let i = 2; i <= n; i++) {
    if (eratosthenesSieve[i]) {
      for (let j = 2 * i; j <= n; j += i) {
        eratosthenesSieve[j] = 0;
      }
    }
  }
}
initEratosthenesSieve(100000);

/**
 * @typedef {{ parent: number, children: number[], p0: number, p1: number, res }} TNode
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPaths = function(n, edges) {
  /** @type {TNode[]} */
  let nodes = [undefined];

  for (let i = 1; i <= n; i++) nodes.push({ 
    parent: 0,
    children: [],
    p0: 0,
    p1: 0,
  });

  for (let [u,v] of edges) {
    nodes[u].children.push(v);
    nodes[v].children.push(u);
  }

  function buildRoot(x, parent) {
    const node = nodes[x];
    node.parent = parent;

    for (let c of node.children) {
      if (c !== parent) buildRoot(c, x)
    }
  }

  buildRoot(1);
  let res = 0;

  function dp(x) {
    const isPrime = eratosthenesSieve[x];
    const node = nodes[x];
    let exc = 0;
    let cp0 = 0;
    let cp1 = 0;

    for (let c of node.children) {
      if (c !== node.parent) {
        dp(c);
        let nodeC = nodes[c];
        cp0 += nodeC.p0;
        cp1 += nodeC.p1;

        if (isPrime) {
          exc += nodeC.p0 * (nodeC.p0 - 1) / 2 - nodeC.p0;
        }
        else {
          exc += nodeC.p0 * nodeC.p1;
        }
      }
    }

    if (isPrime) {
      node.p0 = 0;
      node.p1 = cp0 + 1;
      res += cp0 * (cp0 - 1) / 2 - exc;
    }
    else {
      node.p0 = cp0 + 1;
      node.p1 = cp1;
      res += (cp0 + 1) * cp1 - exc
    }
  }
  
  dp(1);

  return res;
};

