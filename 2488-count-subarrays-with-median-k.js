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
