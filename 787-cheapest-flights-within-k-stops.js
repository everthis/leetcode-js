/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
const findCheapestPrice = function(n, flights, src, dst, K) {
  const arr = Array(n).fill(Infinity)
  arr[src] = 0
  const g = {}
  for(const [u,v,p] of flights) {
    if(g[u] == null) g[u] = []
    g[u].push([v, p])
  }

  let step = 0
  let q = [[src,0]]
  while(step < K + 1 && q.length) {
    const len = q.length
    const row = []
    for(let i = 0; i < len; i++) {
      const el = q[i]
      const [s, dis] = el
      for(const e of (g[s] || [])) {
        const [nxt, p] = e
        if(arr[nxt] > p + dis) {
          arr[nxt] = p + dis
          row.push([nxt, arr[nxt]])
        }
        
      }      
    }
    q = row
    step++
  }
  
  return arr[dst] === Infinity ? -1 : arr[dst]
}

// another

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */

const findCheapestPrice = function(n, flights, src, dst, K) {
    let mn = new Array(n + 1).fill(Infinity);
    mn[src] = 0;
    for(let k = 0; k < K + 1; k++){
      let newmn = [].concat(mn);
      for(let i = 0; i < flights.length; i++){
        let f = flights[i], a = f[0], b = f[1], c = f[2];
        newmn[b] = Math.min(newmn[b], mn[a] + c);
      }
      mn = [].concat(newmn);
    }
    return mn[dst] != Infinity ? mn[dst] : -1
}

// another
const findCheapestPrice = function(n, flights, src, dst, K) {
    const map = [];
    flights.forEach(([s, d, p]) => {
      map[s] = map[s] || [];
      map[s][d] = p;
    });
    let min = Infinity;
    const p = find(src, 0, 0);
    return p === Infinity ? -1 : p;
  
    function find(s, p, c) {
      if (s === dst) {
        return p;
      }
      const l = map[s];
      if (c > K || p > min || !l) {
        return Infinity;
      }
      l.forEach((p1, d) => {
        min = Math.min(min, find(d, p + p1, c + 1));
      });
      return min;
    }
};
