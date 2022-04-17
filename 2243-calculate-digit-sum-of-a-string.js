/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const digitSum = function(s, k) {
  let cur = s
  while(cur.length > k) {
    const arr = []
    for(let i = 0; i < cur.length; i += k) {
      let tmp = ''
      for(let j = 0; j < k && i + j < cur.length; j++) {
        tmp += cur[i + j]
      }
      arr.push(tmp)
    }
    arr.forEach((e, i) => {
      let res = 0
      for(let ch of e) res += +ch
      arr[i] = '' +res
    })
    cur = arr.join('')
    
  }
  return cur
};
