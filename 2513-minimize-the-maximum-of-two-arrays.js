/**
 * @param {number} divisor1
 * @param {number} divisor2
 * @param {number} uniqueCnt1
 * @param {number} uniqueCnt2
 * @return {number}
 */
var minimizeSet = function(divisor1, divisor2, uniqueCnt1, uniqueCnt2) {
  let l = 1, r = 1e18
  const {floor: flr} = Math
  while(l < r) {
    const mid = l + flr((r - l) / 2)
    if(notEnough(mid)) l = mid + 1
    else r = mid
  } 
  return l


  function notEnough(n) {
    const a = n - flr(n / divisor1)
    const b = n - flr(n / divisor2)
    const c = n - (flr(n / divisor1) + flr(n / divisor2) - flr( n / lcm(divisor1, divisor2)))
    if(a < uniqueCnt1) return true
    if(b < uniqueCnt2) return true
    if(a + b - c < uniqueCnt1 + uniqueCnt2) return true
    return false
  }
};

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function lcm(a, b) {
    return (a / gcd(a, b)) * b;
}



