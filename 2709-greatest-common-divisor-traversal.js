// max number in `nums` is 10^5. Only need primes up to sqrt(10^5) = 316
const primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
  157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
  239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313,
]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canTraverseAllPairs = function(nums) {
  const n = nums.length
  const uf = new Array(n).fill(-1)
  const primeIdxs = {}

  const find = (i) => (uf[i] < 0 ? i : find(uf[i]))

  nums.forEach((num, i) => {
    // find all prime factors of num
    let primeFactors = []
    for (let p of primes) {
      if (num % p === 0) {
        primeFactors.push(p)
        while (num % p === 0) num = Math.floor(num / p)
      }
    }

    if (num !== 1) primeFactors.push(num)

    for (let factor of primeFactors) {
      if (factor in primeIdxs) {
        let pi = find(i)
        let pj = find(primeIdxs[factor])
        // union if not already merged
        if (pi !== pj) {
          if (uf[pi] > uf[pj]) [pi, pj] = [pj, pi]
          uf[pi] += uf[pj]
          uf[pj] = pi
        }
      } else primeIdxs[factor] = i
    }
  })

  return Math.abs(Math.min(...uf)) === n
};
