/**
 * @param {number[]} prevRoom
 * @return {number}
 */
const waysToBuildRooms = function (prevRoom) {
  return brute(prevRoom);
};
function brute(prevRoom) {
  const power = function (a, b, n) {
    a = a % n;
    let result = 1n;
    let x = a;
    while (b > 0) {
      let leastSignificantBit = b % 2n;
      b = b / 2n;
      if (leastSignificantBit == 1n) {
        result = result * x;
        result = result % n;
      }
      x = x * x;
      x = x % n;
    }
    return result;
  };
  const modInverse = function (aa, mm) {
    return power(BigInt(aa), BigInt(mm - 2), BigInt(mm));
  };
  const mod = Math.pow(10, 9) + 7;
  let nodes = {};
  for (let i = 0; i < prevRoom.length; i++) {
    nodes[i] = { val: i, edges: {} };
  }
  for (let i = 1; i < prevRoom.length; i++) {
    nodes[prevRoom[i]].edges[i] = true;
  }
  let memo = {};
  const numNodes = function (root) {
    var key = root.val;
    if (memo[key] !== undefined) {
      return memo[key];
    }
    var res = 1;
    for (var x in root.edges) {
      res += numNodes(nodes[x]);
    }
    memo[key] = res;
    return res;
  };
  let den = 1;
  for (let x in nodes) {
    let size = numNodes(nodes[x]);
    den = (den * size) % mod;
  }
  let numerator = 1;
  for (let i = 1; i < prevRoom.length; i++) {
    numerator = (numerator * (i + 1)) % mod;
  }
  let denInverse = modInverse(den, mod);
  return (BigInt(numerator) * denInverse) % BigInt(mod);
}
