/**
 * @param {string[]} nums
 * @return {string}
 */
const findDifferentBinaryString = function(nums) {
  const set = new Set(nums)
  const len = nums[0].length
  for(let i = 0, n = 1 << 17; i < n; i++) {
    const tmp = pad(bin(i), len)
    if(!set.has(tmp)) return tmp
  }
  return ''
};

function bin(num) {
  return (num >>> 0).toString(2)
}

function pad(str,n) {
  while(str.length < n) str = '0' + str
  return str
}
