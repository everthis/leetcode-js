/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
const reversePrefix = function(word, ch) {
  const arr = word.split('')
  let idx = -1
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === ch) {
      idx = i
      break
    }
  }
  if(idx !== -1) {
    const pre = arr.slice(0, idx + 1)
    const remain = arr.slice(idx + 1)
    return pre.reverse().concat(remain).join('')
  }
  return word
};
