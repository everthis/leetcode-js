/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} coordinates
 * @return {number[]}
 */
const countBlackBlocks = function(m, n, coordinates) {
  const hash = {}
  const key = ([x, y]) => `${x},${y}`
  for (const e of coordinates) {
    const [x, y] = e
    if(x === m - 1 && y === n - 1) {
      if(hash[`${x - 1},${y - 1}`]==null) hash[`${x - 1},${y - 1}`] = 0
      hash[`${x - 1},${y - 1}`]++       
    } else if(x === m - 1) {
      if(hash[`${x - 1},${y - 1}`]==null) hash[`${x - 1},${y - 1}`] = 0
      if(hash[`${x - 1},${y}`]==null) hash[`${x - 1},${y}`] = 0
      hash[`${x - 1},${y}`]++
      hash[`${x - 1},${y - 1}`]++
    } else if(y === n - 1) {
      if(hash[`${x - 1},${y - 1}`]==null) hash[`${x - 1},${y - 1}`] = 0
      if(hash[`${x},${y- 1}`]==null) hash[`${x},${y-1}`] = 0
      hash[`${x},${y-1}`]++
      hash[`${x-1},${y - 1}`]++
    } else {
      if(hash[`${x - 1},${y - 1}`]==null) hash[`${x - 1},${y - 1}`] = 0
      if(hash[`${x},${y- 1}`]==null) hash[`${x},${y-1}`] = 0
      if(hash[`${x - 1},${y}`]==null) hash[`${x - 1},${y}`] = 0
      if(hash[`${x},${y}`]==null) hash[`${x},${y}`] = 0
      hash[`${x},${y}`]++
      hash[`${x},${y-1}`]++
      hash[`${x-1},${y}`]++
      hash[`${x-1},${y - 1}`]++
    }
  }
  // console.log(hash)
  const res = Array(5).fill(0)
  for(const [k, v] of Object.entries(hash)) {
    const [x, y] = k.split(',').map(e => +e)
    if(x >= 0 && y >= 0) res[v]++
  }
  const sum = res.reduce((ac, e) => ac + e, 0)
  res[0] = (m - 1) * (n - 1) - sum
  return res
};

// another

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} coordinates
 * @return {number[]}
 */
const countBlackBlocks = function(m, n, coordinates) {
   const block = {}
   
   for(const [i, j] of coordinates) {
     helper(i, j)
   }

   const arr = Array(5).fill(0)
   for(const k in block) {
    if(block.hasOwnProperty(k)) {
      arr[block[k]]++
    }
   }
   arr[0] = (m - 1) * (n - 1) - arr.reduce((ac, e) => ac + e, 0) 
   return arr

   function helper(i, j) {

     if(i < m - 1 && j < n - 1) {
       update(i, j)
       if(i > 0) update(i - 1, j)
       if(j > 0) update(i, j - 1)
       if(i > 0 && j > 0) update(i - 1, j - 1)         
     } else if(i === m - 1 && j === n - 1) {
       update(i - 1, j - 1)
     } else if(i === m - 1) {
       update(i - 1, j)
       if(j > 0) update(i - 1, j - 1)
     } else if(j === n - 1) {
       update(i, j - 1)
       if(i > 0) update(i - 1, j - 1)
     }    
     
   }
  
   function update(i, j, delta = 1) {
     const key = `${i},${j}`
     if(block[key] == null) block[key] = 0
     block[key]++
   }
};

// another

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} coordinates
 * @return {number[]}
 */
const countBlackBlocks = function (m, n, coordinates) {
  let arr = new Array(5).fill(0)
  arr[0] = (m - 1) * (n - 1)
  let mat = {}
  for (let [r, c] of coordinates) {
    mat[r] ||= []
    mat[r][c] = true
  }
  for (let [r, c] of coordinates) {
    for (let i = -1; i < 1; i++) {
      for (let j = -1; j < 1; j++) {
        let nextR = r + i
        let nextC = c + j
        if (nextR < 0 || nextC < 0 || (nextR >= m - 1) | (nextC >= n - 1))
          continue
        let res = getRes(nextR, nextC, mat)
        arr[res]++
      }
    }
  }
  for (let i = 1; i < 5; i++) {
    arr[i] = ~~(arr[i] / i)
  }
  let used = 0
  for (let i = 1; i < 5; i++) {
    used += arr[i]
  }
  arr[0] -= used
  return arr
}

const getRes = (r, c, mat) => {
  let res = 0
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      let nextR = r + i
      let nextC = c + j
      if (mat[nextR]?.[nextC] === true) res++
    }
  }
  return res
}
