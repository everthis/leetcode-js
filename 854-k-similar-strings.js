/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
const kSimilarity = function(A, B) {
  if (A === B) return 0
  let arr = [[B, 0]]
  while (arr.length > 0) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
      let [cur, step] = arr.shift()
      for (let i = 0; i < cur.length; i++) {
        if (cur[i] === A[i]) continue
        for (let j = i + 1; j < cur.length; j++) {
          if (cur[j] !== A[i]) continue
          let newStr =
            cur.substring(0, i) +
            cur[j] +
            cur.substring(i + 1, j) +
            cur[i] +
            cur.substring(j + 1)
          if (newStr === A) return step + 1
          if (cur[i] === A[j]) arr.unshift([newStr, step + 1])
          else arr.push([newStr, step + 1])
        }
        break
      }
    }
  }
}
