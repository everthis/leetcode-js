/**
 * @param {number[]} nums
 * @param {number} p
 * @param {number[][]} queries
 * @return {number}
 */
var countGoodSubseq = function(nums, p, queries) {
    let n = nums.length
    if(n === 1) return 0
    let maxValue = 1
    for(let x of nums) {
        if(x % p === 0) {
            maxValue = Math.max(maxValue, Math.floor(x / p))
        }
    }

    for(const query of queries) {
        let value = query[1]
        if(value % p === 0) {
            maxValue = Math.max(maxValue, Math.floor(value / p))
        }
    }

    const {floor: flr, sqrt, max, min} = Math

    let limit = flr(sqrt(maxValue))
    let primes = []
    let isComposite = new Uint8Array(limit + 1)

    for(let i = 2; i <= limit; i++) {
        if(!isComposite[i]) {
            primes.push(i)
            if(i * i <= limit) {
                for(let j = i * i; j <= limit; j += i) {
                    isComposite[j] = 1
                }
            }
        }
    }

    const factorCache = new Map()

    let base  = 1
    while(base < n) {
        base = base << 1
    }
    let seg = new Int32Array(2 * base)
    for(let i = 0; i < n; i++) {
        seg[base + i] = (nums[i] % p === 0 ? nums[i] : 0)
    }

    for(let i = base - 1; i >= 1; i--) {
        seg[i] = gcd(seg[i << 1], seg[i << 1 | 1])
    }

    const info = new Map()
    let currentFactors = new Array(n)
    let countDivisible = 0 
    for (let i = 0; i < n; ++i) {
        if (nums[i] % p !== 0) {
            currentFactors[i] = [];
            continue;
        }
        ++countDivisible;
        currentFactors[i] = getFactors(Math.floor(nums[i] / p));
        for (let prime of currentFactors[i]) {
            if (!info.has(prime)) {
                info.set(prime, { cnt: 0, xorDiv: 0 });
            }
            let state = info.get(prime);
            ++state.cnt;
            state.xorDiv ^= i;
        }
    }

    let allIndexXor = 0
    for(let i = 0; i < n; i++) {
        allIndexXor ^= i
    }
    let badCount = new Int32Array(n).fill(0)
    let zeroBadCount = n
    
    const changeBad = (index, delta) => {
        if (badCount[index] === 0 && delta > 0) {
            --zeroBadCount;
        }
        badCount[index] += delta;
        if (badCount[index] === 0 && delta < 0) {
            ++zeroBadCount;
        }
    };

    let fullCoverPrimes = 0;
    for (let [prime, state] of info.entries()) {
        if (state.cnt === n) {
            ++fullCoverPrimes;
        } else if (state.cnt === n - 1) {
            let missingIndex = allIndexXor ^ state.xorDiv;
            changeBad(missingIndex, 1);
        }
    }

    let res = 0

    for(const [index, value] of queries) {
        removeValue(index)
        nums[index] = value
        updateSeg(index, value % p === 0 ? value : 0)
        addValue(index, value)
        if(existsGoodSubsequence()) res++
    }

    return res

    function getFactors (value) {
        if (factorCache.has(value)) {
            return factorCache.get(value);
        }

        let factors = [];
        let x = value;
        for (let prime of primes) {
            if (prime * prime > x) {
                break;
            }
            if (x % prime === 0) {
                factors.push(prime);
                while (x % prime === 0) {
                    x /= prime;
                }
            }
        }
        if (x > 1) {
            factors.push(x);
        }

        factorCache.set(value, factors);
        return factors;
    }

    function existsGoodSubsequence () {
        if (countDivisible === 0) {
            return false;
        }
        if (countDivisible < n) {

            return seg[1] === p;
        }

        return fullCoverPrimes === 0 && zeroBadCount > 0;
    }
    function addValue (index, value) {
        if (value % p !== 0) {
            currentFactors[index] = [];
            return;
        }
        ++countDivisible;
        currentFactors[index] = getFactors(Math.floor(value / p));
        for (let prime of currentFactors[index]) {
            if (!info.has(prime)) {
                info.set(prime, { cnt: 0, xorDiv: 0 });
            }
            let state = info.get(prime);
            if (state.cnt === n) {
                --fullCoverPrimes;
            } else if (state.cnt === n - 1) {
                let missingIndex = allIndexXor ^ state.xorDiv;
                changeBad(missingIndex, -1);
            }

            ++state.cnt;
            state.xorDiv ^= index;

            if (state.cnt === n) {
                ++fullCoverPrimes;
            } else if (state.cnt === n - 1) {
                let missingIndex = allIndexXor ^ state.xorDiv;
                changeBad(missingIndex, 1);
            }
        }
    }
    function removeValue (index) {
        if (nums[index] % p !== 0) {
            return;
        }
        --countDivisible;
        for (let prime of currentFactors[index]) {
            let state = info.get(prime);
            if (state.cnt === n) {
                --fullCoverPrimes;
            } else if (state.cnt === n - 1) {
                let missingIndex = allIndexXor ^ state.xorDiv;
                changeBad(missingIndex, -1);
            }

            --state.cnt;
            state.xorDiv ^= index;

            if (state.cnt === n) {
                ++fullCoverPrimes;
            } else if (state.cnt === n - 1) {
                let missingIndex = allIndexXor ^ state.xorDiv;
                changeBad(missingIndex, 1);
            }
        }
        currentFactors[index] = [];
    }
    function updateSeg (index, value) {
        let pos = base + index;
        seg[pos] = value;
        for (pos >>= 1; pos >= 1; pos >>= 1) {
            seg[pos] = gcd(seg[pos << 1], seg[pos << 1 | 1]);
            if (pos === 1) {
                break;
            }
        }
    }

};
function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
        a %= b;
        [a, b] = [b, a];
    }
    return a;
}
