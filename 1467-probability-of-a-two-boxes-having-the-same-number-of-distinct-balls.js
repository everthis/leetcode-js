/**
 * @param {number[]} balls
 * @return {number}
 */
const getProbability = function (balls) {
  const k = balls.length
  const halfUsed = balls.reduce((acc, val) => acc + val, 0) / 2
  const startArray = new Array(k)
  startArray.fill(0)
  const perm = function (b1, b2) {
    let p1, p2, s1, s2
    s1 = b1.reduce((acc, val) => acc + val, 0)
    s2 = b2.reduce((acc, val) => acc + val, 0)
    const fact = function (n) {
      let f = 1
      for (let i = 2; i <= n; i++) f *= i
      return f
    }
    p1 = fact(s1)
    p2 = fact(s2)
    b1.forEach((val) => {
      if (val > 1) p1 /= fact(val)
    })
    b2.forEach((val) => {
      if (val > 1) p2 /= fact(val)
    })
    return p1 * p2
  }

  const getValidCombos = function (ballsUsed, colorNum = 0) {
    let box1Used = ballsUsed.reduce((acc, val) => acc + val, 0)
    let matches = { good: 0, total: 0 },
      thisColorMax = halfUsed - box1Used
    if (colorNum === k - 1) {
      if (thisColorMax > balls[colorNum]) return { good: 0, total: 0 }
      ballsUsed[colorNum] = thisColorMax
      let ballsLeft = []
      let colorsUsed = [0, 0]
      for (let i = 0; i < k; i++) {
        ballsLeft[i] = balls[i] - ballsUsed[i]
        if (ballsUsed[i] > 0) colorsUsed[0]++
        if (ballsLeft[i] > 0) colorsUsed[1]++
      }
      let permutations = perm(ballsUsed, ballsLeft, k)
      return {
        good: colorsUsed[1] === colorsUsed[0] ? permutations : 0,
        total: permutations,
      }
    }
    thisColorMax = Math.min(thisColorMax, balls[colorNum])
    for (let i = 0; i <= thisColorMax; i++) {
      let match = getValidCombos([...ballsUsed], colorNum + 1)
      matches = {
        good: matches.good + match.good,
        total: matches.total + match.total,
      }
      ballsUsed[colorNum]++
    }
    return matches
  }
  let res = getValidCombos(startArray)
  return res.good / res.total
}
