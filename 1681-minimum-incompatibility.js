/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumIncompatibility = function(nums, k) {
  const n = nums.length
  const size = n / k
  const mod = 1e9 + 7
  if(size === 1) return 0
  const limit = 1 << n
  const dp = Array.from({ length: limit }, () => Array(16).fill(Infinity))
  for(let i = 0; i < n; i++) dp[1 << i][i] = 0
  
  for(let mask = 0; mask < limit; mask++) {
    for(let i = 0; i < n; i++) {
      if((mask & (1 << i)) === 0) continue
      for(let j = 0; j < n; j++) {
        if((mask & (1 << j))) continue
        const newMask = mask | (1 << j)
        if(bitCnt(mask) % size === 0) {
          dp[newMask][j] = Math.min(dp[newMask][j], dp[mask][i])
        } else if(nums[j] > nums[i]) {
          dp[newMask][j] = Math.min(dp[newMask][j], dp[mask][i] + nums[j] - nums[i])
        }
      }
    }
  }

  const candidate = Math.min(...dp.at(-1))
  
  return candidate === Infinity ? -1 : candidate
    
  function bitCnt(num) {
    let res = 0
    while(num) {
      if(num & 1) res++
      num = num >> 1
    }
    
    return res
  }
};

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumIncompatibility = function (nums, k) {
  if (k === nums.length) {
    return 0
  }
  const counts = Array(nums.length + 1).fill(0)
  for (let num of nums) {
    counts[num]++
    if (counts[num] > k) {
      return -1
    }
  }
  const size = nums.length / k
  let ans = Number.MAX_VALUE
  const backtracking = (groupIdx, index, sum, lowIndex, curIndex) => {
    if (index === size) {
      sum += curIndex - lowIndex
      if (sum > ans) {
        return
      }
      if (groupIdx === k - 1) {
        ans = sum
        return
      } else {
        groupIdx++
        index = 0
      }
    }
    if (index === 0) {
      for (let i = 0; i < counts.length; i++) {
        if (counts[i]) {
          counts[i]--
          backtracking(groupIdx, index + 1, sum, i, i)
          counts[i]++
        }
      }
    } else {
      for (let i = curIndex + 1; i < counts.length; i++) {
        if (counts[i]) {
          counts[i]--
          backtracking(groupIdx, index + 1, sum, lowIndex, i)
          counts[i]++
        }
      }
    }
  }
  backtracking(0, 0, 0, 0, 0)
  return ans
}

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumIncompatibility = function (nums, k) {
  if (nums.length === k) return 0
  const maxInBucket = nums.length / k
  const freqCount = {}
  for (const n of nums) {
    if (freqCount[n]) {
      if (freqCount[n] === k) {
        return -1
      } else {
        freqCount[n]++
      }
    } else {
      freqCount[n] = 1
    }
  }
  const cache = {}
  const allIndiciesUsedMask = 2 ** nums.length - 1
  const dfs = (usedIndicesBitMask) => {
    if (usedIndicesBitMask === allIndiciesUsedMask) {
      return 0
    }
    if (cache[usedIndicesBitMask]) {
      return cache[usedIndicesBitMask]
    }
    const valsToIndices = {}
    for (let i = 0; i < nums.length; i++) {
      const indexMask = 1 << i
      if (usedIndicesBitMask & indexMask) continue
      const value = nums[i]
      if (!valsToIndices.hasOwnProperty(value)) {
        valsToIndices[value] = i
      }
    }
    const indicesAvailable = Object.values(valsToIndices)
    let minIncompatibilityCost = Infinity
    const combinations = createCombinations(indicesAvailable, maxInBucket)
    for (const indices of combinations) {
      let nextMask = usedIndicesBitMask
      let minVal = Infinity
      let maxVal = -Infinity
      for (const index of indices) {
        minVal = Math.min(minVal, nums[index])
        maxVal = Math.max(maxVal, nums[index])
        nextMask = nextMask | (1 << index)
      }
      const incompatibilityCost = maxVal - minVal
      minIncompatibilityCost = Math.min(
        minIncompatibilityCost,
        dfs(nextMask) + incompatibilityCost
      )
    }
    return (cache[usedIndicesBitMask] = minIncompatibilityCost)
  }
  return dfs(0)
}

function createCombinations(indices, len) {
  const combinations = []
  if (indices.length < len) {
    return combinations
  }
  const stack = [[[], 0]]
  while (stack.length > 0) {
    let [combi, i] = stack.pop()
    for (; i < indices.length; i++) {
      const combination = [...combi, indices[i]]
      if (combination.length === len) {
        combinations.push(combination)
      } else {
        stack.push([combination, i + 1])
      }
    }
  }
  return combinations
}
