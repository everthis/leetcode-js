/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minAbsoluteDifference = function(nums, x) {
  const {abs, min, max, floor} = Math
  
          let res = Infinity
        let n = nums.length
        for(let i = 0; i < n; i++) {
            if( i + x <= n - 1) {
                let j = n - 1 - i - x
                // abs_var.push()
              res = min(res, abs(nums[i] - nums[i + x]))
                let g = 1  
                while (j > 0) {
                    // abs_var.push()
                  res = min(res, abs(nums[i] - nums[i + x + g]))
                    g += 1 
                    j -= 1
                }
            }

        }
        return res
};
