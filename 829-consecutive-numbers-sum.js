/**
 * @param {number} N
 * @return {number}
 */
const consecutiveNumbersSum = function (N) {
  let count = 1
  for (let k = 2; k < Math.sqrt(2 * N); k++) {
    if ((N - (k * (k - 1)) / 2) % k === 0) count++
  }
  return count
}

// another

/**
 * @param {number} N
 * @return {number}
 */
const consecutiveNumbersSum = function(N) {
  let res = 0
  for(let i = 1; i <= N; i++) {
    const diff = i * (i - 1) / 2
    const nd = N - diff
    if(nd <= 0) break
    if(nd % i === 0) res++
  }
  
  return res
};
