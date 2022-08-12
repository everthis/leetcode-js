/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
const platesBetweenCandles = function(s, queries) {
  const n = s.length,
    leftCandlePos = Array(n).fill(-1)
    rightCandlePos = Array(n).fill(-1)
    candleCnt = Array(n).fill(0)
  let pos = -1
  for(let i = 0; i < n; i++) {
    if(s[i] === '|') pos = i
    leftCandlePos[i] = pos
  }
  pos = -1
  for(let i = n - 1; i >= 0; i--) {
    if(s[i] === '|') pos = i
    rightCandlePos[i] = pos
  }
  for(let i = 0, cnt = 0; i < n; i++) {
    if(s[i] === '|') cnt++
    candleCnt[i] = cnt
  }

  const len = queries.length, res = Array(len).fill(0)

  for(let i = 0; i < len; i++) {
    const [left, right] = queries[i]
    const leftCandle = rightCandlePos[left], rightCandle = leftCandlePos[right]
    const delta = rightCandle - leftCandle
    if(leftCandle !== -1 && rightCandle !== -1 && delta > 1) {
      res[i] = delta + 1 - (candleCnt[rightCandle] - candleCnt[leftCandle] + 1)
    }
  }

  return res
}

// another

/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
const platesBetweenCandles = function (s, queries) {
  const n = s.length
  const leftArr = Array(n).fill(-1),
    rightArr = Array(n).fill(n),
    candleCnt = Array(n).fill(0)
  let candle = -1
  for (let i = 0; i < n; i++) {
    if (s[i] === '|') candle = i
    leftArr[i] = candle
  }
  candle = n
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === '|') candle = i
    rightArr[i] = candle
  }
  let cnt = 0
  for (let i = 0; i < n; i++) {
    if (s[i] === '|') cnt++
    candleCnt[i] = cnt
  }
  // console.log(leftArr, rightArr)
  const res = []
  for (const [s, e] of queries) {
    const l = rightArr[s]
    const r = leftArr[e]
    const diff = r - l
    if (diff > 1) {
      const e = r - l + 1 - (candleCnt[r] - candleCnt[l] + 1)
      res.push(e)
    } else res.push(0)
  }

  return res
}

