/**
 * @param {number[]} rating
 * @return {number}
 */
const numTeams = function(rating) {
  let res = 0
  for(let i = 1, n = rating.length; i < n - 1; i++) {
    const less = Array(2).fill(0), greater = Array(2).fill(0)
    for(let j = 0; j < n; j++) {
      if(rating[i] > rating[j]) {
        less[j < i ? 0 : 1]++
      }
      if(rating[i] < rating[j]) {
        greater[j > i ? 0 : 1]++
      }
    }
    res += less[0] * greater[0] + less[1] * greater[1]
  }
  return res
};


// another

/**
 * @param {number[]} rating
 * @return {number}
 */
const numTeams = function(rating) {
  if(rating.length < 3) return 0
  const n = rating.length
  const leftTree = Array(1e5 + 1).fill(0)
  const rightTree = Array(1e5 + 1).fill(0)
  for(let r of rating) update(rightTree, r, 1)
  let res = 0
  for(let r of rating) {
    update(rightTree, r,  -1)
    res += getPrefixSum(leftTree, r - 1) * getSuffixSum(rightTree, r + 1)
    res += getSuffixSum(leftTree, r + 1) * getPrefixSum(rightTree, r - 1)
    update(leftTree, r, 1)
  }

  return res
};

function update(bit, index, val) {
  while(index < bit.length) {
    bit[index] += val
    index += index & (-index)
  }
}

function getPrefixSum(bit, index) {
  let res = 0
  while(index > 0) {
    res += bit[index]
    index -= index & (-index)
  }
  return res
}

function  getSuffixSum(bit, index) {
  return getPrefixSum(bit, 1e5) - getPrefixSum(bit, index - 1)
}
