/**
 * @param {number[]} nums
 * @return {number}
 */
var findValidSplit = function(nums) {
    const rightCounter = new Map();

    for (const num of nums) {
        for (const [prime, count] of getPrimesCount(num)) {
            rightCounter.set(prime, (rightCounter.get(prime) ?? 0) + count);
        }
    }

    const leftCounter = new Map();
    const common = new Set();

    for (let i = 0; i < nums.length - 1; i++) {
        for (const [prime, count] of getPrimesCount(nums[i])) {
            leftCounter.set(prime, (leftCounter.get(prime) ?? 0) + count);
            rightCounter.set(prime, rightCounter.get(prime) - count);

            if (rightCounter.get(prime) > 0) common.add(prime);
            if (rightCounter.get(prime) === 0) common.delete(prime);
        }

        if (common.size === 0) return i;
    }

    return -1;
};

function getPrimesCount(n) {
    const count = new Map();

    for (let i = 2; (i * i) <= n; i++) {
        while (n % i === 0) {
            count.set(i, (count.get(i) ?? 0) + 1);
            n /= i;
        }
    }

    if (n > 1) {
        count.set(n, (count.get(n) ?? 0) + 1);
    }

    return count;
}

// another


/**
 * @param {number[]} nums
 * @return {number}
 */
const findValidSplit = function(nums) {
  const n = nums.length, right = {};
  for (let i = 0; i < n; i++) {
    const primeFactorsCount = getPrimeFactors(nums[i]);
    for (let prime in primeFactorsCount) {
      const count = primeFactorsCount[prime];
      right[prime] = (right[prime] || 0) + count;
    }
  }
  const left = {}, common = new Set();
  for (let i = 0; i <= n - 2; i++) {
    const primesFactorsCount = getPrimeFactors(nums[i]);
    for (const prime in primesFactorsCount) {
      const count = primesFactorsCount[prime];
      left[prime] = (left[prime] || 0) + count;
      right[prime] -= count;
      if (right[prime] > 0) common.add(prime);
      else if (right[prime] === 0) common.delete(prime);
    }
    if (common.size === 0) return i;
  }
  return -1;
};

function getPrimeFactors(n) {
  const counts = {};
  for (let x = 2; (x * x) <= n; x++) {
    while (n % x === 0) {
      counts[x] = (counts[x] || 0) + 1;
      n /= x;
    }
  }
  if (n > 1) counts[n] = (counts[n] || 0) + 1;
  return counts;
}

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const findValidSplit = function (nums) {
  const map = new Map()
  const n = nums.length
  const max = Math.max(...nums)
  const primes = Eratosthenes(max)

  for (let i = 0; i < n; i++) {
    let x = nums[i]
    for (const p of primes) {
      if (p * p > x && x > 1) {
        if (!map.has(x)) {
          map.set(x, [i, i])
        }
        map.get(x)[1] = i
        break
      }

      if (x % p === 0) {
        if (!map.has(p)) {
          map.set(p, [i, i])
        }
        const a = map.get(p)
        a[1] = i
      }
      while (x % p === 0) x = x / p
    }
  }

  const diff = Array(n + 1).fill(0)
  for (const [k, v] of map) {
    const [s, e] = v
    // if(s === e) continue
    diff[s] += 1
    diff[e] -= 1
  }
  // console.log(diff)
  let sum = 0
  for (let i = 0; i < n - 1; i++) {
    sum += diff[i]
    if (sum === 0) return i
  }

  return -1
}

function Eratosthenes(n) {
  const q = Array(n + 1).fill(0)
  const primes = []
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (q[i] == 1) continue
    let j = i * 2
    while (j <= n) {
      q[j] = 1
      j += i
    }
  }
  for (let i = 2; i <= n; i++) {
    if (q[i] == 0) primes.push(i)
  }
  return primes
}

