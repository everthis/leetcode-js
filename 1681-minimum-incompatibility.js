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
