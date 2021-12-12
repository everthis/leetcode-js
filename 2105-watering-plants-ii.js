/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
const minimumRefill = function(plants, capacityA, capacityB) {
    const n = plants.length
    let [left, right] = [0, n - 1]
    let [A, B] = [capacityA, capacityB]
    let ans = 0
    while (left < right) {
        if (A < plants[left]) {
            A = capacityA
            ans += 1              
        }

        A -= plants[left]
        left += 1
        if (B < plants[right]) {
            B = capacityB
            ans += 1              
        }

        B -= plants[right]
        right -= 1          
    }


    if (left != right || A >= plants[left] || B >= plants[left]) return ans
    return ans + 1   
};

