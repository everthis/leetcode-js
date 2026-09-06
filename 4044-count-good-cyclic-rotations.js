/**
 * @param {number[]} nums
 * @return {number}
 */
var countGoodRotations = function(nums) {
    let res = 0

    const n = nums.length
    let leftSum = nums.slice(0, Math.floor(n / 2)).reduce((ac, e) => ac + e, 0)
    // let rightSum = nums.slice(Math.floor(n / 2)).reduce((ac, e) => ac + e, 0)
    let totalSum = nums.reduce((ac, e) => ac + e, 0)
    // let rightSum = totalSum - leftSum

    const q = [...nums]
    let idx = 0
    const mid = Math.floor(n / 2)

    for(let i = 0; i < n; i++) {
        // if(leftSum > rightSum) res++

        // leftSum -= q[idx]
        // rightSum += q[idx]
        // const midIdx = Math.floor(n / 2)
        // leftSum += q[midIdx]
        // rightSum -= q[midIdx]

        // q.push(q.shift())
        // idx++
        let rightSum = totalSum - leftSum
        if(leftSum > rightSum) res += 1
        leftSum -= q[i]
        leftSum += q[(i + mid) % n]
        
    }
    

    return res
};
