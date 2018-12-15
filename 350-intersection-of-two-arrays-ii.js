/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
    const res = []
    const map = {}
    for(let i = 0; i < nums1.length; i++) {
        if(map.hasOwnProperty(nums1[i])) {
            map[nums1[i]] += 1
        } else {
            map[nums1[i]] = 1
        }
    }
    
    for(let j = 0; j < nums2.length; j++) {
        if(map.hasOwnProperty(nums2[j]) && map[nums2[j]] > 0) {
           res.push(nums2[j])
           map[nums2[j]] -= 1
        }
    }
    
    return res
};
