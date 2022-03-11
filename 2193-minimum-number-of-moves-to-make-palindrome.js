/**
 * @param {string} s
 * @return {number}
 */
const minMovesToMakePalindrome = function(s) {
  let res = 0
  const arr = s.split('')
  
  while(arr.length) {
    const idx = arr.indexOf(arr[arr.length - 1])
    if(idx === arr.length - 1) {
      res += ~~(idx / 2)
    } else {
      res += idx
      arr.splice(idx, 1)
    }
    arr.pop()
  }

  return res
};
