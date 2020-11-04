/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
const canFormArray = function(arr, pieces) {
  const m = new Map()
  for(let i = 0, len = arr.length; i < len; i++) {
    m.set(arr[i], i)
  }
  for(let p of pieces) {
    let idx = m.get(p[0])
    if(idx == null) return false
    for(let i = 1, len = p.length; i < len; i++) {
      console.log(m.has(p[i]))
      if(!m.has(p[i]) || arr[++idx] !== p[i]) return false
    }
  }
  return true
};
