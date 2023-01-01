/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctPrimeFactors = function(nums) {
    const primes = getPrime(1000)
    const ans = new Set()
    nums.forEach(it => {
        let cur = it
        ans.add(primes[cur])
        while (primes[cur] != 1) {
            ans.add(primes[cur])
            cur /= primes[cur]
        }
        ans.add(cur)
    })
    ans.delete(1)

    return ans.size
  
    function getPrime(k) {
        const minPrime = new Array(k + 1).fill(1)
        let p = 2
        while (p <= k) {
            let i = p
            while (p <= k / i) {
                if (minPrime[i * p] == 1) {
                    minPrime[i * p] = p
                }
                i++
            }
            p++
            while (p <= k) {
                if (minPrime[p] == 1) break
                p++
            }
        }
        return minPrime
    }
};
