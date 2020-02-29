/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
const findRadius = function(houses, heaters) {
  heaters.sort((a, b) => a - b)
  return Math.max(...houses.map(h => findMinDistance(h, heaters)))
}

const findMinDistance = (house, heaters) => {
  let left = 0
  let right = heaters.length - 1
  while (left <= right) {
    const mid = left + ((right - left) >> 1)
    if (heaters[mid] <= house && house <= heaters[mid + 1]) {
      return Math.min(house - heaters[mid], heaters[mid + 1] - house)
    } else if (heaters[mid] <= house) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  if (left === 0) return heaters[0] - house
  if (left === heaters.length) return house - heaters[heaters.length - 1]
}

// another

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
const findRadius = function(houses, heaters) {
  let res = 0
  let k = 0
  houses = houses.sort((a, b) => a - b)
  heaters = heaters.sort((a, b) => a - b)
  for (let i = 0; i < houses.length; i++) {
    const curr = houses[i]
    while (
      k < heaters.length &&
      Math.abs(heaters[k + 1] - curr) <= Math.abs(heaters[k] - curr)
    ) {
      k++
    }
    res = Math.max(res, Math.abs(heaters[k] - curr))
  }
  return res
}

// another

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
const findRadius = function(houses, heaters) {
  heaters.sort((a, b) => a - b)
  houses.sort((a, b) => a - b)
  let res = 0, i = 0
  for(let h of houses) {
    while(i < heaters.length - 1 && heaters[i] + heaters[i + 1] <= h * 2) i++
    res = Math.max(res, Math.abs(heaters[i] - h))
  }
  return res
}

