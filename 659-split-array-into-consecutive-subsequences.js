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


// another

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isPossible = function(nums) {
  let prev = -Infinity, p1 = 0, p2 = 0, p3 = 0
  let i = 0
  const n = nums.length
  while (i < n) {
    let curr = nums[i], c1 = 0, c2 = 0, c3 = 0
    let cnt = 0
    while (i < n && nums[i] === curr) { cnt++; i++ }
    if (curr !== prev+1) {
      if (p1 > 0 || p2 > 0) { return false }
      c1 = cnt; c2 = 0; c3 = 0
    } else {
      if (cnt < p1 + p2) { return false }
      c2 = p1
      c3 = p2 + Math.min(p3, cnt - p1 - p2)
      c1 = Math.max(0, cnt - p1 - p2 - p3)
    }
    prev = curr; p1 = c1; p2 = c2; p3 = c3;
  }
  return p1 === 0 && p2 === 0
};
