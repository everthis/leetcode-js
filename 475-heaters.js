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
