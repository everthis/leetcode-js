/**
 * @param {number} n
 * @return {boolean}
 */
const isThree = function(n) {
  if(n == 1) return false;
  let a = ~~Math.sqrt(n);
  if(n != a * a) return false;
  for(let i = 2; i < a; i++) {
      if (n % i == 0)
          return false;
  }
  return true;
};
