/**
 * @param {number[]} A
 * @return {number}
 */

const numSquarefulPerms = function (A) {
  const cntMap = {}
  const squareMap = {}
  let cnt = 0
  for (let num of A) {
    if (!cntMap.hasOwnProperty(num)) {
      cntMap[num] = 1
      squareMap[num] = new Set()
    } else {
      cntMap[num] = cntMap[num] + 1
    }
  }

  for (let num1 of Object.keys(cntMap)) {
    for (let num2 of Object.keys(cntMap)) {
      let c = Math.sqrt(+num1 + +num2)
      if (c === Math.floor(c)) {
        squareMap[num1].add(+num2)
        squareMap[num2].add(+num1)
      }
    }
  }
  for (let num of Object.keys(cntMap)) {
    countPerm(num, A.length - 1)
  }
  return cnt
  function countPerm(num, left) {
    cntMap[num] = cntMap[num] - 1
    if (left === 0) {
      cnt++
    } else {
      for (let next of squareMap[num]) {
        if (cntMap[next] !== 0) {
          countPerm(next, left - 1)
        }
      }
    }
    cntMap[num] = cntMap[num] + 1
  }
}
