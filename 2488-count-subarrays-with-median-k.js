/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countSubarrays = (a, k) => permutationArrayWithMedianK(a, k);

const permutationArrayWithMedianK = (a, k) => {
  const m = new Map([[0, 1]])
  let find = false, balance = 0, res = 0;
  for (const x of a) {
    if (x < k) {
      balance--;
    } else if (x > k) {
      balance++;
    } else {
      find = true;
    }
    if (find) {
      // balance - 1, subarray length is even, has one more right
      res += (m.get(balance) || 0) + (m.get(balance - 1) || 0);
    } else {
      m.set(balance, (m.get(balance) || 0) + 1);
    }
  }
  return res;
};


// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  const n = nums.length;
  for(let i = 0; i < n; i++) {
    nums[i] = nums[i] < k ? -1 : nums[i] === k ? 0 : 1
  }
  const evenSum = {}
  const oddSum = {}
  evenSum[0] = 1
    let sum = 0
    let res = 0
    for(let i = 0; i < n; i++) {
        sum += nums[i]
        if(i % 2 === 0) {
            if(evenSum[sum] != null) res += evenSum[sum]
            if(oddSum[sum - 1] != null) res += oddSum[sum - 1]
            if(oddSum[sum] == null) oddSum[sum] = 0
            oddSum[sum]++
        } else {
            if(oddSum[sum] != null) res += oddSum[sum]
            if(evenSum[sum - 1] != null) res += evenSum[sum - 1]
            if(evenSum[sum] == null) evenSum[sum] = 0
            evenSum[sum]++
        }
    }
 // console.log(evenSum, oddSum, nums)
  return res
};
