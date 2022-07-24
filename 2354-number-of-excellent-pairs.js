/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countExcellentPairs = function(nums, k) {
    const map = new Map();
    const set = new Set();
    const l = nums.length;
    let res = 0;
    for (let num of nums) {
        let temp = num.toString(2).split("1").length - 1;
        if (!map.has(temp)) {
            map.set(temp, new Set([num]));
        } else {
            map.get(temp).add(num);
        }
    }
    
    for (let num of nums) {
        let temp = num.toString(2).split("1").length - 1;
        if(!set.has(num)) {
            let gap = Math.max(0, k - temp)
            for (let key of map.keys()) {
                if (key >= gap) {
                    res += map.get(key).size;
                }
            }  
            set.add(num);
        }else {
            continue;
        }
    }
    return res; 
};
