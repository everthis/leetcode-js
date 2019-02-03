/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
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
