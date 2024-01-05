/**
 * @param {number[]} nums
 * @return {number}
 */
const longestNiceSubarray = function (nums) {
  const n = nums.length
  let i = 0, mask = 0, res = 0
  for(let j = 0; j < n; j++) {
    const e = nums[j]
    while((mask & e) !== 0) {
      mask ^= nums[i]
      i++
    }
    mask |= e
    res = Math.max(res, j - i + 1)
  }
  return res
}

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestNiceSubarray = function (nums) {
  let res = 1, i = 0, j = 0, mask = 0
  const n = nums.length
  for(i = 0; i < n; i++) {
    const cur = nums[i]
    while((cur & mask) !== 0) {
      mask ^= nums[j]
      j++
    }
    mask |= cur
    // console.log(i, j, mask, i - j +1)
    res = Math.max(res, i - j + 1)
  }
  
  return res
}

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let max = 1;
    let stack = [];
    for(let i =0;i<nums.length;i++){
        if(nums[i]&nums[i+1]) continue;
        stack.push(nums[i])
        for(let j =i+1;j<nums.length;j++){
            let state = true;
            for(el of stack){
                if(el&nums[j]){
                    state=false;
                    break;
                }
            }
            if(state) {
                stack.push(nums[j]);
                max = Math.max(max,stack.length);
            }
            else{
                stack = []
                break;
            }
        }
    }
    return max;
};
