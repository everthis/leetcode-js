/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const maximalNetworkRank = function (n, roads) {
  const edgeCount = new Array(n).fill(0);
  const m = roads.length;
  const map = new Map();
  for (let i = 0; i < m; i++) {
    edgeCount[roads[i][0]]++;
    edgeCount[roads[i][1]]++;
    if (!map.has(roads[i][0])) {
      map.set(roads[i][0], new Set());
    }
    if (!map.has(roads[i][1])) {
      map.set(roads[i][1], new Set());
    }
    const A = map.get(roads[i][0]);
    A.add(roads[i][1]);
    const B = map.get(roads[i][1]);
    B.add(roads[i][0]);
  }

  let maxRank = 0;
  for (let i = 0; i < m; i++) {
    let rank = edgeCount[roads[i][0]] + edgeCount[roads[i][1]] - 1;
    if (rank > maxRank) {
      maxRank = rank;
    }
  }
  const keys = [];
  for (let k of map.keys()) keys.push(k);
  // console.log(keys, map)
  for (let i = 0, len = keys.length; i < m - 1; i++) {
    const tmp = map.get(keys[i]);
    for (let j = i + 1; j < m; j++) {
      // console.log(tmp, i, j, tmp.has(keys[j]))
      if (tmp && !tmp.has(keys[j])) {
        let rank = edgeCount[keys[i]] + edgeCount[keys[j]];
        if (rank > maxRank) {
          maxRank = rank;
        }
      }
    }
  }
  

  return maxRank;
};
