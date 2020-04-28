/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function(letters, target) {
  const arr = Array.from(new Set(letters))
  const len = arr.length
  const t = target.charCodeAt(0)
  for(let i = 0, len = arr.length; i < len; i++) {
    if(arr[i].charCodeAt(0) - t > 0) return arr[i]
  }
  return arr[0]
};
