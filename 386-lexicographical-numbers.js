/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = function(n) {
  const res = []
  for(let i = 1; i < 10; i++) {
    dfs(i)
  }
  
  return res
  
  function dfs(num) {
    if(num > n) return
    res.push(num)
    for(let i = 0; i < 10; i++) {
      const tmp = num * 10 + i
      if(tmp > n) return
      dfs(tmp)
    }
  }
};

// another

/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = function(n) {
  const result = []
  for (let i = 1; i < 10; i++) {
    dfs(i)
  }
  function dfs(n) {
    if (n <= num) result.push(n)
    if (10 * n <= num) {
      for (let j = 0; j < 10; j++) {
        dfs(10 * n + j)
      }
    }
  }
  return result
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
