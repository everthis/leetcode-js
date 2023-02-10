/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
const maxScore = function(nums1, nums2, k) {
  const pq = new MinPriorityQueue({ priority: e => e })
  const n = nums1.length
  const arr = []
  
  for(let i = 0; i < n; i++) {
    arr.push([nums1[i], nums2[i]])
  }
  
  arr.sort((a, b) => b[1] - a[1])
  let res = 0, left = 0
  for(let i = 0; i < n; i++) {
    const cur = arr[i]
    pq.enqueue(cur[0])
    left += cur[0]
    if(pq.size() > k) {
      const tmp = pq.dequeue().element
      left -= tmp
    }
    
    if(pq.size() === k) {
      res = Math.max(res, left * cur[1])
    }
  }
  
  return res
};
