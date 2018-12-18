/**
 * @param {number} N
 * @return {number}
 */
function monotoneIncreasingDigits(N) {
  const arr = (''+N).split('').map(el => +el)
  let mark = arr.length
  for(let i = arr.length - 1; i > 0; i--) {
    if (arr[i] < arr[i - 1]) {
      mark = i - 1
      arr[i - 1]--
    }
  }
  for(let i = mark + 1; i < arr.length; i++) {
    arr[i] = 9
  }

  return arr.join('')
}
