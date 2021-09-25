/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = function(arr) {
  arr.sort((a, b) => {
    const an = numOfBits(a), bn = numOfBits(b)
    return an === bn ? a - b : an - bn
  })
  return arr
};

function numOfBits(n) {
  let res = 0
  for(let i = 0; i < 32; i++) {
    if((1 << i) & n) res++
  }
  return res
}
