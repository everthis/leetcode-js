/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = function(nums) {
    if(nums == null) return 0
    if(Object.prototype.toString.call(nums) === '[object Array]' && nums.length === 0) return 0
    let res = 0
    const map = {}
    for (let el of nums) {
        if(map.hasOwnProperty(el)) {
           map[el] +=  1
        } else {
           map[el] = 1
        }
    }
    Object.keys(map).forEach(el => {
        if(map.hasOwnProperty(+el + 1)) {
            res = Math.max(res, map[el] + map[+el + 1])
        }
    })
    console.log(res)
    return res
};
