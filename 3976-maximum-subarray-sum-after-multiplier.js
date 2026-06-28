/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function(nums, k) {
    const n = nums.length
    const INF = 1e18
    let res = -INF
    const {max, floor, ceil} = Math

    if(n > 1) {
        let cur = 0, mx = -INF
        for(let i = 0; i < n - 1; i++) {
            cur = max(nums[i], cur + nums[i])
            mx = max(mx, cur)
        }

        res = max(res,mx)
        cur = 0
        mx = -INF
        for(let i = 1; i < n; i++) {
            cur = max(nums[i], cur + nums[i])
            mx = max(mx, cur)
        }
        res = max(res, mx)
    }

    res = max(res, h(nums,k, true))
    res = max(res, h(nums,k,false))

    return res

    function h(nums,k,mul) {
        let ans = -INF
        let dp0 = -INF, dp1 = -INF, dp2 = -INF

        for(const x of nums) {
            let nor = x
            let chan = mul ? 1 * x * k: (x > 0 ? floor(x/ k) : ceil(x/k))
            
            let ndp0 = max(nor, dp0 + nor)
            let ndp1 = max(dp0 + chan, dp1 + chan, chan)
            let ndp2 = max(dp1 + nor, dp2 + nor)

            dp0 = ndp0
            dp1 = ndp1
            dp2 = ndp2
            
            ans = max(ans,dp1,dp2)
        }

        return ans
    }
};
