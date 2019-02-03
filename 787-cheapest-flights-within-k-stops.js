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
