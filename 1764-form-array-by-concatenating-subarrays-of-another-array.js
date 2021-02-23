/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
const canChoose = function (groups, nums) {
  const m = nums.length
  let index = 0
  for (let group of groups) {
    const n = group.length
    // Step-1 Generate LPS
    const lps = Array(n).fill(0)
    for (let i = 1; i < n; i++) {
      let j = lps[i - 1]
      while (j > 0 && group[i] !== group[j]) {
        j = lps[j - 1]
      }
      if (group[i] === group[j]) {
        j++
      }
      lps[i] = j
    }

    // Step-2 - Matching
    let j = 0
    while (index < m) {
      if (nums[index] === group[j]) {
        j++
        index++
      }
      if (j === n) break
      else if (index < m && nums[index] != group[j]) {
        if (j > 0) {
          j = lps[j - 1]
        } else {
          index++
        }
      }
    }
    if (j !== n) return false
  }
  return true
}


// another


/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
const canChoose = function(groups, nums) {
  let gi = 0, ni = 0
  const n = groups.length, m = nums.length
  while(gi < n && ni < m) {
    const len = groups[gi].length
    let pass = true
    if(nums[ni] !== groups[gi][0]) {
      ni++
      continue
    }
    for(let i = 1; i < len; i++) {
      if(nums[ni + i] !== groups[gi][i]) {
        pass = false
        break
      }
    }
    if(pass) {
      gi++
      ni += len
    } else {
      ni++
    }
  }
  if(gi >= n) return true

  return false

};
