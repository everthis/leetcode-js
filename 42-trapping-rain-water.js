/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
    
    let s = height.length
    if(s === 0) return 0
    let res = 0
    const left_max = [height[0]]
    const right_max = []
    right_max[s - 1] = height[s - 1]
    for(let i = 1; i < s; i++) {
        left_max[i] = Math.max(height[i], left_max[i - 1])
    }
    for(let i = s - 2; i >= 0; i--) {
        right_max[i] = Math.max(height[i], right_max[i + 1])
    }
    for(let i = 1; i < s - 1; i++) {
        res += Math.min(left_max[i], right_max[i]) - height[i] 
    }
    return res
};
