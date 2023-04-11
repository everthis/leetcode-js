/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} bricks
 * @return {number}
 */
const buildWall = function (height, width, bricks) {
  const mod = 1e9 + 7
  const avail = []
  const bset = new Set(bricks)
  const m = width - 1, limit = 1 << m
  for(let mask = 0; mask < limit; mask++) {
    const idxArr = [-1]
    for(let j = 0; j < m; j++) {
      if((mask >> j) & 1) idxArr.push(j)
    }
    idxArr.push(m)
    let flag = true
    for(let j = 1, len = idxArr.length; j < len; j++) {
      if(!bset.has(idxArr[j] - idxArr[j - 1])) {
        flag = false
        break
      }
    }
    if(flag) avail.push(mask)
  }
  
  let res = 0
  if(height === 1) return avail.length
  const dp = Array.from({ length: height }, () => Array(limit).fill(0))
  for(const mask of avail) {
    dp[0][mask] = 1
  }
  
  for(let i = 1; i < height; i++) {
    for(let j = 0, len = avail.length; j < len; j++) {
      const cur = avail[j]
      for(let k = 0; k < len; k++) {
        const pre = avail[k]
        if((cur & pre) === 0) {
          dp[i][cur] = (dp[i][cur] + dp[i - 1][pre]) % mod
        }
      }
      if(i === height - 1) {
        res = (res + dp[i][cur]) % mod
      }
    }
  }
  
  return res
}

// another

/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} bricks
 * @return {number}
 */
const buildWall = function (height, width, bricks) {
  const MOD = 1e9 + 7
  const rowPerms = new Set() // save all possible permutations of a row as a bitmask
  const memo = []
  for (let i = 0; i <= height; ++i) {
    memo[i] = new Array(2 ** 10).fill(0)
  }
  findAllPossRowPerms(rowPerms, 0, 0 | 0)
  return countWaysToBuildSturdyWall(height, 0)

  function countWaysToBuildSturdyWall(currHeight, prevRowPerm) {
    if (currHeight === 0) return 1
    if (memo[currHeight][prevRowPerm] != 0) {
      return memo[currHeight][prevRowPerm]
    }
    let totCount = 0
    for (const rowPerm of rowPerms) {
      if ((rowPerm & prevRowPerm) === 0) {
        totCount =
          (totCount + countWaysToBuildSturdyWall(currHeight - 1, rowPerm)) % MOD
      }
    }
    memo[currHeight][prevRowPerm] = totCount
    return totCount
  }

  function findAllPossRowPerms(rowPerms, currWidth, mask) {
    if (currWidth === width) {
      rowPerms.add(mask)
      return
    }
    // The reason why we don't want to mark the 0 index is that we are going from right to left
    // when creating the wall and unlike other points of a row, the all rows will be flushed
    // against the 0 index.
    if (currWidth > 0) mask |= 1 << currWidth
    for (const brick of bricks) {
      if (currWidth + brick <= width) {
        findAllPossRowPerms(rowPerms, currWidth + brick, mask)
      }
    }
    return
  }
}
