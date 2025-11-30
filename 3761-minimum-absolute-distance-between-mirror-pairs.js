/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function(nums) {
    const n = nums.length
  const revs = new Map()

  for(let i = 0; i < n; i++) {
    let num = nums[i]
    let rev = 0
    while(num) {
      const rem = num % 10
      rev = rev * 10 + rem
      num = Math.floor(num / 10)
    }

    if(!revs.has(rev)) {
      revs.set(rev, [])
    }
    revs.get(rev).push(i)
  }

  let res = 1e20

  for(let i = n - 1; i >= 0; i--) {
    const num = nums[i]
    const arr = revs.get(num) || []
    while(arr.length && arr[arr.length - 1] >= i) {
      arr.pop()
    }

    if(arr.length) {
      res = Math.min(res, i - arr[arr.length - 1])
    }
  }
  
  

  return res >= n ? -1 : res
};
