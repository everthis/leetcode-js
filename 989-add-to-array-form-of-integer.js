/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = function(num, k) {
  const res = []
  for(let i = num.length - 1; i >= 0; i--) {
    const tmp = num[i] + k
    res.push(tmp % 10)
    k = ~~(tmp / 10)
  }

  while(k > 0) {
    res.push(k % 10)
    k  = ~~(k / 10)
  }
  res.reverse()
  return res
};
