/**
 * @param {number} num
 * @return {number}
 */
var smallestNumber = function(num) {
    const minus = num < 0
    const nums = Math.abs(num)
      .toString()
      .split('')
      .map(_ => parseInt(_))
      .sort((a, b) => minus ? b-a : a-b);
    if(!minus && nums[0] === 0) {
        let i = 0
        while(nums[i] === 0 && i < nums.length-1) i++
        nums[0] = nums[i]
        nums[i] = 0
    }
    const answer = parseInt(nums.map(_ => _.toString()).join(''))
    return minus ? -answer : answer
};
