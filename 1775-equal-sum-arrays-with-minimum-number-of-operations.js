/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minOperations = function(nums1, nums2) {
  const m = nums1.length, n = nums2.length
  if(m > n * 6 || n > m * 6) return -1
  let sum1 = sum(nums1), sum2 = sum(nums2)
  if(sum1 > sum2) return minOperations(nums2, nums1)

  const arr = Array(6).fill(0)
  nums1.forEach(e => arr[6 - e]++)
  nums2.forEach(e => arr[e - 1]++)

  let res = 0, i = 5
  while(sum1 < sum2) {
    while(arr[i] === 0) i--
    sum1 += i
    res++
    arr[i]--
  }

  return res
};

function sum(arr) {
  return arr.reduce((ac, e) => ac + e, 0)
}

// another

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minOperations = function(nums1, nums2) {
  const m = nums1.length, n = nums2.length
  if(m > n * 6 || n > m * 6) return -1
  const sum1 = nums1.reduce((ac, e) => ac + e, 0)
  const sum2 = nums2.reduce((ac, e) => ac + e, 0)
  let largerArr, smallerArr
  if(sum1 === sum2) return 0
  if(sum1 > sum2) {
    largerArr = nums1
    smallerArr = nums2
  } else {
    largerArr = nums2
    smallerArr = nums1
  }
  
  const gain = []
  for(let e of largerArr) gain.push(e - 1)
  for(let e of smallerArr) gain.push(6 - e)
  gain.sort((a, b) => b - a)
  let diff = Math.abs(sum2 - sum1)
  let cnt = 0
  for(let e of gain) {
    diff -= e
    cnt++
    if(diff <= 0) return cnt
  }
  return -1
};




// another

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minOperations = function(nums1, nums2) {
    const len1 = nums1.length, len2 = nums2.length;
    if (len1 > 6 * len2 || len2 > 6 * len1) return -1;
    let sum1 = 0, sum2 = 0;
    for (let x of nums1) sum1 += x;
    for (let x of nums2) sum2 += x;
    if (sum1 === sum2) return 0;
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let cnt = 0;
    if (sum1 > sum2) {
        let ind1 = len1 - 1, ind2 = 0;
        while (sum1 > sum2) { 
            if (ind2 === len2 || nums1[ind1] - 1 > 6 - nums2[ind2]) sum1 -= nums1[ind1--] - 1;
            else sum2 += 6 - nums2[ind2++];
            cnt++;
        }
        return cnt;
    }
    let ind1 = 0, ind2 = len2 - 1;
    while (sum1 < sum2) {
        if (ind1 === len1 || nums2[ind2] - 1 > 6 - nums1[ind1]) sum2 -= nums2[ind2--] - 1;
        else sum1 += 6 - nums1[ind1++];
        cnt++;
    }
    return cnt;
};
