/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
const minStickers = function (stickers, target) {
  const n = stickers.length
  const m = target.length
  const limit = 1 << m
  const dp = Array(limit).fill(Infinity)
  dp[0] = 0
  for (let i = 0; i < limit; i++) {
    if (dp[i] === Infinity) continue
    for (const sticker of stickers) {
      let stat = i
      for (const ch of sticker) {
        for (let j = 0; j < m; j++) {
          if (target[j] === ch && ((stat >> j) & 1) === 0) {
            stat |= (1 << j)
            break
          }
        }
      }
      dp[stat] = Math.min(dp[stat], dp[i] + 1)
    }
  }

  return dp[limit - 1] === Infinity ? -1 : dp[limit - 1]
}


// another


/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
const minStickers = function(stickers, target) {
  const isEqual = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; ++i) if (arr1[i] !== arr2[i]) return false
    return true
  }

  const minus = (arr1, arr2) => {
    let res = []
    for (let i = 0; i < arr1.length; ++i)
      res[i] = arr1[i] <= 0 ? arr1[i] : arr1[i] - arr2[i]
    return res
  }

  const isAllNonpositive = arr => {
    return arr.every(item => item <= 0)
  }

  const getString = arr => {
    return arr.reduce((acc, cur, idx) => {
      if (cur > 0) return acc + String.fromCharCode(idx + 97).repeat(cur)
      else return acc
    }, '')
  }

  let ss = stickers.map(word => {
    let tmp = new Array(26).fill(0)
    for (let i = 0; i < word.length; ++i) tmp[word.charCodeAt(i) - 97]++
    return tmp
  })
  let root = new Array(26).fill(0)
  for (let i = 0; i < target.length; ++i) root[target.charCodeAt(i) - 97]++
  let cache = new Set()
  let queue = [root]
  let size = 0,
    level = 0,
    front = null
  while (queue.length !== 0) {
    size = queue.length
    while (size--) {
      front = queue.shift()
      for (let w of ss) {
        let t = minus(front, w)
        let str = getString(t)
        if (isEqual(t, front) || cache.has(str)) continue
        if (isAllNonpositive(t)) return level + 1
        else {
          queue.push(t)
          cache.add(str)
        }
      }
    }
    level++
  }
  return -1
}
