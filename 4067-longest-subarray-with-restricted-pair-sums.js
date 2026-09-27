/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarray = function(nums) {
    const freq = Array(501).fill(0)
    let res = 0, left = 0

    for(let r = 0; r < nums.length; r++) {
        let x = nums[r]
        while(h(x, freq)) {
            freq[nums[left]]--
            left++
        }
        freq[x]++
        res = Math.max(res, r - left + 1)
    }

    return res

    function h(x, freq) {
        for(let a = 1; a < x; a++) {
            let b = x - a
            if(freq[a] === 0 || freq[b] ===0) continue

            if(a !== b) return true
            if(freq[a] >= 2) return true

            
        }

        for(let a = 1; x + a <= 500; a++) {
            if(freq[a] > 0 && freq[x + a] > 0) return true
        }

        return false
    }
};
