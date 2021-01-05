/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
const minOperations = function (target, arr) {
  let length1 = target.length,
    length2 = arr.length
  const targetMap = new Map()
  for (let i = 0; i < length1; i++) targetMap.set(target[i], i)
  const list = new Array()
  for (let i = 0; i < length2; i++) {
    let num = arr[i]
    if (targetMap.has(num)) list.push(targetMap.get(num))
  }
  let longestIncreasing = lengthOfLIS(list)
  return target.length - longestIncreasing

  function lengthOfLIS(list) {
    let length = 1,
      size = list.length
    if (size == 0) return 0
    const d = new Array(size + 1).fill(0)
    d[length] = list[0]
    for (let i = 1; i < size; ++i) {
      if (list[i] > d[length]) {
        d[++length] = list[i]
      } else {
        let left = 1,
          right = length,
          pos = 0
        while (left <= right) {
          let mid = (left + right) >> 1
          if (d[mid] < list[i]) {
            pos = mid
            left = mid + 1
          } else {
            right = mid - 1
          }
        }
        d[pos + 1] = list[i]
      }
    }
    return length
  }
}

// another

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
const minOperations = function(target, arr) {
  const map = new Map()
  for(let i = 0, len = target.length; i < len; i++) {
    map.set(target[i], i)
  }
  const stack = []
  for(let a of arr) {
    if(!map.has(a)) continue
    if(stack.length === 0 || map.get(a) > stack[stack.length - 1]) {
      stack.push(map.get(a))
      continue
    }
    let left = 0, right = stack.length - 1, mid
    while(left < right) {
      mid = left + ((right - left) >> 1)
      if(stack[mid] < map.get(a)) left = mid + 1
      else right = mid
    }
    stack[left] = map.get(a)
  }

  return target.length - stack.length
};
