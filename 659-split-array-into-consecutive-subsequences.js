/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isPossible = function(nums) {
  const freq = new Map()
  const build = new Map()
  for (let el of nums) {
    freq.has(el) ? freq.set(el, freq.get(el) + 1) : freq.set(el, 1)
  }
  for (let item of nums) {
    if (freq.get(item) === 0) continue
    else if (getOrDefault(build, item) > 0) {
      build.set(item, build.get(item) - 1)
      build.set(item + 1, getOrDefault(build, item + 1) + 1)
    } else if (getOrDefault(freq, item + 1) > 0 && getOrDefault(freq, item + 2) > 0) {
      freq.set(item + 1, freq.get(item + 1) - 1)
      freq.set(item + 2, freq.get(item + 2) - 1)
      build.set(item + 3, getOrDefault(build, item + 3) + 1)
    } else return false
    freq.set(item, freq.get(item) - 1)
  }
  return true
}

function getOrDefault(map, key) {
  return map.get(key) || 0
}
