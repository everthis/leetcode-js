/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function (letters, target) {
  const n = letters.length
  if (target < letters[0] || target >= letters[n - 1]) return letters[0]
  let left = 0
  let right = n - 1
  while (left < right) {
    let mid = left + ((right - left) >> 1)
    if (letters[mid] <= target) left = mid + 1
    else right = mid
  }
  return letters[right]
}
