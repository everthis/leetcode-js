/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const nthUglyNumber = function(n, a, b, c) {
  let lo = 1, hi = 2 * 1e9;
  const { floor: f } = Math
  let ab = a * b / gcd(a, b);
  let bc = b * c / gcd(b, c);
  let ac = a * c / gcd(a, c);
  let abc = a * bc / gcd(a, bc);
  while(lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if(valid(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;

  function valid(mid) {
    let res = f(mid / a) + f(mid / b) + f(mid / c) - f(mid / ab) - f(mid / bc) - f(mid / ac) + f(mid / abc)
    return res >= n
  }

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b)
  }
};

// another

/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function (n, a, b, c) {
  const {floor} = Math
  let lo = 1,
    hi = 2 * (1e9 | 0)
  ;(a = BigInt(a)), (b = BigInt(b)), (c = BigInt(c))
  let ab = (a * b) / gcd(a, b)
  let bc = (b * c) / gcd(b, c)
  let ac = (a * c) / gcd(a, c)
  let abc = (a * bc) / gcd(a, bc)

  while (lo < hi) {
    let mid = lo + ((hi - lo) >> 1)
    let cnt =
      floor(mid / Number(a)) +
      floor(mid / Number(b)) +
      floor(mid / Number(c)) -
      floor(mid / Number(ab)) -
      floor(mid / Number(bc)) -
      floor(mid / Number(ac)) +
      floor(mid / Number(abc))
    if (cnt < n) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }

  return lo

  function gcd(a, b) {
    return b ? gcd(b, a % b) : a
  }
}
