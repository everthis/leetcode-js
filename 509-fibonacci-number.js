/**
 * @param {number} N
 * @return {number}
 */
const cache = {}
const fib = function(N) {
  if(cache[N]) return cache[N]
  if(N === 0) return 0
  if(N === 1) return 1
  let res = fib(N - 1) + fib(N - 2)
  cache[N] = res
  return res
};
