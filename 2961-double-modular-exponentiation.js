/**
 * @param {number[][]} variables
 * @param {number} target
 * @return {number[]}
 */
var getGoodIndices = function (variables, target) {
  const res = []
  let index = 0
  for (let v of variables) {
    let a = v[0]
    let b = v[1]
    let c = v[2]
    let m = v[3]
    let x = pw(a, b, 10)
    let y = pw(x, c, m)
    // console.log(y)
    if (y === BigInt(target)) {
      res.push(index)
    }
    index++
  }
  return res

  function pw(a, b, m) {
    let res = 1n
    a = BigInt(a)
    while (b) {
      if (b & 1) {
        res = (1n * res * a) % BigInt(m)
      }
      a = (1n * a * a) % BigInt(m)
      b >>= 1
    }
    return res
  }
}
