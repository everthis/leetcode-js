/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = function(n) {
  let res = []
  for (let i = 1; i < 10; ++i) {
    if (!dfs(i, res, n)) {
      break
    }
  }
  return res
}

function dfs(num, res, n) {
  if (num > n) {
    return false
  }
  res.push(num)
  for (let i = 0; i < 10; ++i) {
    if (!dfs(num * 10 + i, res, n)) {
      break
    }
  }
  return true
}

// another

const lexicalOrder = function(n) {
  function getNumberByOrder(start, end) {
    for (let i = start; i <= end; i++) {
      if (i > n) {
        break
      }
      res.push(i)
      getNumberByOrder(i * 10, i * 10 + 9)
    }
  }
  const res = []
  getNumberByOrder(1, 9)
  return res
}
