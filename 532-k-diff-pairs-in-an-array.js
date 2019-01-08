/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs = function(nums, k) {
    if(k < 0) return 0
    let count = 0
    const hash = {}
    for(let el of nums) {
        if (hash.hasOwnProperty(el)) {
          if(k === 0 && hash[el] === 1) {
            count++
          }
          hash[el] += 1
        } else {
          if (hash.hasOwnProperty(el - k)) {
              count++
          }
          if (hash.hasOwnProperty(el + k)) {
              count++
          }
          hash[el] = 1
        }
    }

    return count
};
