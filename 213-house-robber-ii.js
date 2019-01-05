/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
    if(nums.length === 0) return 0
    if(nums.length < 3) return Math.max(...nums)
  
    const startFromFirst = [0,nums[0]]
    const startFromSecond = [0,0]
    
    for(let i = 2; i <= nums.length; i++) {
      startFromFirst[i] = Math.max(startFromFirst[i - 1], startFromFirst[i - 2] + nums[i - 1])
      startFromSecond[i] = Math.max(startFromSecond[i - 1], startFromSecond[i - 2] + nums[i - 1])
    }
    
    return Math.max(startFromFirst[nums.length - 1], startFromSecond[nums.length])
  
};
