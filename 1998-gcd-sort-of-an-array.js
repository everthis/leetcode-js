/**
 * @param {number[]} nums
 * @return {boolean}
 */
const gcdSort = function(nums) {
  const spf = Array(nums.length).fill(0)
         let maxNum = Math.max(...nums);
        sieve(maxNum);

        const uf = new UnionFind(maxNum+1);
        for (let x of nums) {
            for (let f of getFactors(x)) uf.union(f, x);          
        }


        const sortedArr = nums.slice();
        sortedArr.sort((a, b) => a - b)

        for (let i = 0; i < nums.length; ++i) {
            let pu = uf.find(sortedArr[i]);
            let pv = uf.find(nums[i]);
            if (pu != pv) return false; // can't swap nums[i] with sortedArr[i]
        }
        return true;
  
  function sieve( n) { // O(Nlog(logN)) ~ O(N)
    for (let i = 2; i <= n; ++i) spf[i] = i;
    for (let i = 2; i * i <= n; i++) {
      if (spf[i] != i) continue; // skip if `i` is not a prime number
      for (let j = i * i; j <= n; j += i) {
        if (spf[j] == j) { // marking spf[j] if it is not previously marked
          spf[j] = i;
        }
      }
    }
  }
  
  function getFactors(n) { // O(logN)
    const factors = [];
    while (n > 1) {
      factors.push(spf[n]);
      n = ~~(n /spf[n]);
    }
    return factors;
  }
};

function gcd( x,  y) {
    return y == 0 ? x : gcd(y, x % y);
}

class UnionFind {
    constructor(n) {
        this.parent = [];
        for (let i = 0; i < n; i++) this.parent[i] = i;
    }
    find(x) {
        if (x == this.parent[x]) return x;
        return this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    union( u,  v) {
        let pu = this.find(u), pv = this.find(v);
        if (pu != pv) this.parent[pu] = pv;
    }
};

