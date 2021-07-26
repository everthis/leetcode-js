/**
 * @param {string} num
 * @param {number[]} change
 * @return {string}
 */
const maximumNumber = function(num, change) {
  let res = ''
  const arr = num.split('')
  let prev = false, cnt = 0
  for(let i = 0, n = num.length; i < n; i++) {
    const cur = +num[i]
    if(change[cur] > cur) {
      cnt++
      prev = true
      arr[i] = change[cur]
    }
    if(change[cur] < cur) {
      if(cnt <= 0) continue
      else break
    }
  }
  
  return arr.join('')
};
