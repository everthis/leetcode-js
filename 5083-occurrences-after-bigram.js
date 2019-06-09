/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
const findOcurrences = function(text, first, second) {
  const res = []
  let arr = text.split(' ')
  for(let i = 1, len = arr.length; i < len; i++) {
    if(arr[i] === second && arr[i - 1] === first) {
      if(i + 1 < len) res.push(arr[i + 1])
    }
  }
  return res
};
