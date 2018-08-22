/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const countPrimeSetBits = function(L, R) {
  let res = 0;
  for (let i = L; i <= R; i++) {
    if (chkPrime(i)) {
      res += 1;
    }
  }
  return res;
};

function chkPrime(num) {
  const str = bin(num);
  const snum = setNum(str);
  return isPrime(snum);
}

function setNum(str) {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "1") {
      num += 1;
    }
  }
  return num;
}

function bin(num) {
  return (num >>> 0).toString(2);
}
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}
