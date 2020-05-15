![alt text](https://github.com/everthis/leetcode-js/blob/master/images/maximum-sum-circular-subarray.png "maximum-sum-circular-subarray")

```js
/**
 * @param {number[]} A
 * @return {number}
 */
const maxSubarraySumCircular = function(A) {
  let minSum = Infinity, sum = 0, maxSum = -Infinity, curMax = 0, curMin = 0
  for(let a of A) {
    sum += a
    curMax = Math.max(curMax + a, a);
    maxSum = Math.max(maxSum, curMax);
    curMin = Math.min(curMin + a, a);
    minSum = Math.min(minSum, curMin);
  }
  return  maxSum > 0 ? Math.max(maxSum, sum - minSum) : maxSum;
};
```
