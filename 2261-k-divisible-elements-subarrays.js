/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function(nums, k, p) {
  let res = 0
    const n = nums.length
    const big = BigInt
    const base = 201n

    const pow = Array(201)
    for(let i = 0, val = 1n; i < 201; i++) {
        pow[i] = val
        val *= base
    }
    const arr = nums.map(e => big(e))

    for(let len = 1; len <= n; len++) {

        let hash = 0n
        const set = new Set()
        let cnt = 0
        for(let i = 0; i < n; i++) {
            if(i >= len) {
                hash -= arr[i - len] * pow[len - 1]
                if(arr[i - len] % big(p) === 0n) cnt--
            }

            hash = hash * base + arr[i]
            if(arr[i] % big(p) === 0n) cnt++
            if(i >= len - 1) {

                if(set.has(hash)) continue
                set.add(hash)


                if(cnt <= k) {
                    // console.log(len, i, cnt)
                    res++
                }
            }

        }

    }


  return res  
};

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
const countDistinct = function(nums, k, p) {
    const se = new Set()
    let n = nums.length
    for (let i = 0; i < n; i++) {
        let tmp = ""
        let cnt = 0
        for (let j = i; j < n; j++) {
            if (nums[j] % p == 0)
                cnt++
            if (cnt <= k) {
                tmp = tmp + (nums[j]) + "-"
                se.add(tmp)
            } else break
        }
    }
    return se.size
};
