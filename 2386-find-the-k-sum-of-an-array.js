/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var kSum = function(nums, k) {
    let sum = 0, n = nums.length, pq = new MaxPriorityQueue({ compare: (x, y) => y[0] - x[0] });
    for (let i = 0; i < n; i++) {
        if (nums[i] < 0) {
            nums[i] *= -1;
        } else {
            sum += nums[i];
        }
    }
    if (k == 1) return sum;
    nums.sort((x, y) => x - y);
    pq.enqueue([sum - nums[0], 0]);
    for (let i = 2; i < k; i++) {
        let [x, idx] = pq.dequeue();
        if (idx + 1 < n) {
            pq.enqueue([x + nums[idx] - nums[idx + 1], idx + 1]);
            pq.enqueue([x - nums[idx + 1], idx + 1]);
        }
    }
    return pq.front()[0];
};
