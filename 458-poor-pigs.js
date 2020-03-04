/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
const poorPigs = function(buckets, minutesToDie, minutesToTest) {
  const index = Math.ceil(minutesToTest / minutesToDie) + 1
  return Math.ceil(Math.log(buckets) / Math.log(index))
}

// another

/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
const poorPigs = function(buckets, minutesToDie, minutesToTest) {
  let pigs = 0
  while ((minutesToTest / minutesToDie + 1) ** pigs < buckets) {
    pigs++
  }
  return pigs
}
