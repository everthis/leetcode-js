/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} limit
 * @return {number}
 */
var maxProduct = function(nums, k, limit) {
    const MIN = -5000;
    const dp = new Map();
        const n = nums.length;

        let sum = 0;
        for (const x of nums) sum += x;

        if (k > sum || k < -sum) return -1;

 
        const ans = recursion(0, 0, 0, 0, k, n, nums, limit);
        return (ans === MIN) ? -1 : ans;
    function  recursion(pos, currSum, product, isOdd, k, n, nums, limit) {
        if (pos === n) {
            return (currSum === k && isOdd !== 0 && product <= limit ? product : MIN);
        }

        if (dp.has(pos) && dp.get(pos).has(currSum) && dp.get(pos).get(currSum).has(product) && dp.get(pos).get(currSum).get(product).has(isOdd)) {
            return dp.get(pos).get(currSum).get(product).get(isOdd);
        }

        let ans = recursion(pos + 1, currSum, product, isOdd, k, n, nums, limit);
        if (isOdd === 0) {
            ans = Math.max(ans, recursion(pos + 1, currSum + nums[pos], nums[pos], 2, k, n, nums, limit));
        }
        if (isOdd === 1) {
            ans = Math.max(ans, recursion(pos + 1, currSum + nums[pos], Math.min(product * nums[pos], limit + 1), 2, k, n, nums, limit));
        }
        if (isOdd === 2) {
            ans = Math.max(ans, recursion(pos + 1, currSum - nums[pos], Math.min(product * nums[pos], limit + 1), 1, k, n, nums, limit));
        }

        if (!dp.has(pos)) {
            dp.set(pos, new Map());
        }
        if (!dp.get(pos).has(currSum)) {
            dp.get(pos).set(currSum, new Map());
        }
        if (!dp.get(pos).get(currSum).has(product)) {
            dp.get(pos).get(currSum).set(product, new Map());
        }
        dp.get(pos).get(currSum).get(product).set(isOdd, ans);

        return ans;
    }
};



