
/**
 * @param {number} n
 * @return {number[][]}
 */
const findPrimePairs = function(n) {
  const res = primes(n + 1, n)
  return res
};

function primes(n, target) {
  const arr = Array(n).fill(0)

  for(let i = 2; i * i < n; i++) {
    if(arr[i] !== 0) continue
    let j = i * i
    while(j < n) {
      arr[j] = 1
      j += i
    }
  }

  let res = []
  for(let i = 2; i < n; i++) {
    if(arr[i] === 0 && target - i > 1 && target - i >= i && arr[target - i] === 0) res.push([i, target - i])
  }
  return res
};
