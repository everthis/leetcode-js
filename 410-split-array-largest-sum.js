/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
function doable(nums, cuts, max) {
    let acc = 0
    for(let num of nums) {
        if(num > max) return false
        else if(acc + num <= max) acc += num
        else {
            --cuts;
            acc = num;
            if(cuts < 0) return false
        }
    }
    return true
}


function splitArray(nums, m) {
    let left = 0
    let right = 0
    for(let num of nums) {
        left = Math.max(left, num)
        right += num
    }
    while(left < right) {
        let mid = Math.floor(left + (right - left) / 2)
        if(doable(nums, m - 1, mid)) right = mid
        else left = mid + 1 
    }
    return left
}
