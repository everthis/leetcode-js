/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var findKthSmallest = function (coins, k) {
    const n = coins.length;
    const dic = new Map();
    for (let i = 1; i <= n; i++) {
        const combinations = getCombinations(coins, i);
        for (const comb of combinations) {
            const lcm = getLCM(comb);
            if (!dic.has(i)) {
                dic.set(i, []);
            }
            dic.get(i).push(lcm);
        }
    }

    function count(dic, target) {
        let ans = 0;
        for (let i = 1; i <= n; i++) {
            const lcms = dic.get(i);
            for (const lcm of lcms) {
                ans += Math.floor(target / lcm) * Math.pow(-1, i + 1);
            }
        }
        return ans;
    }

    let start = Math.min(...coins);
    let end = Math.min(...coins) * k;
    while (start + 1 < end) {
        const mid = Math.floor((start + end) / 2);
        if (count(dic, mid) >= k) {
            end = mid;
        } else {
            start = mid;
        }
    }
    if (count(dic, start) >= k) {
        return start;
    } else {
        return end;
    }

    function getCombinations(arr, k) {
        const combinations = [];
        const helper = (start, current) => {
            if (current.length === k) {
                combinations.push([...current]);
                return;
            }
            for (let i = start; i < arr.length; i++) {
                current.push(arr[i]);
                helper(i + 1, current);
                current.pop();
            }
        };
        helper(0, []);
        return combinations;
    }

    function getLCM(arr) {
        const gcd = (a, b) => {
            if (b === 0) {
                return a;
            }
            return gcd(b, a % b);
        };
        let lcm = arr[0];
        for (let i = 1; i < arr.length; i++) {
            const g = gcd(lcm, arr[i]);
            lcm = (lcm * arr[i]) / g;
        }
        return lcm;
    }
}


// another



function calcLcm(a, b) {
  let p = a * b

  let t = 0
  while (b) {
    t = b
    b = a % b
    a = t
  }

  return p / a
}

/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var findKthSmallest = function (coins, k) {
  let n = coins.length

  let cnt = 0
  let lcm = 1
  let sgn = -1
  let cur = 0
  let res = 0

  let l = 1
  let r = 50000000000

  while (l <= r) {
    cur = Math.floor((l + r) / 2)
    cnt = 0
    bt(0)

    if (cnt >= k) {
      res = cur
      r = cur - 1
    } else {
      l = cur + 1
    }
  }

  return res
  
  function bt(i) {
    let bak = lcm
    lcm = calcLcm(lcm, coins[i])
    sgn = -sgn
    cnt += sgn * Math.floor(cur / lcm)

    ++i
    if (i < n) bt(i)

    lcm = bak
    sgn = -sgn
    if (i < n) bt(i)
  }
}
