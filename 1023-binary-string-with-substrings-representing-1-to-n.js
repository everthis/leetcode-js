/**
 * @param {string} S
 * @param {number} N
 * @return {boolean}
 */
const queryString = function(S, N) {
  for(let i = 1; i <= N; i++) {
    let tmp = bin(i)
    if(S.indexOf(tmp) === -1) return false
  }
  return true
};

function bin(num) {
  return (num >>> 0).toString(2)
}
