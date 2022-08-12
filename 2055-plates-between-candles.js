/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
const platesBetweenCandles = function (s, queries) {
  const candleIdxArr = []
  const n = s.length
  for(let i = 0; i < n; i++) {
    if(s[i] === '|') candleIdxArr.push(i)
  }
  // console.log(candleIdxArr)
  const res = []
  for(const [s, e] of queries) {
    const l = lower(candleIdxArr, s, e)
    const r = upper(candleIdxArr, s ,e)
    const tmp = (candleIdxArr[r] - candleIdxArr[l] + 1) - (r - l + 1)
    res.push(tmp >= 0 ? tmp : 0)
  }

  return res


  function lower(arr,s,e) {
    let l = 0, r = arr.length - 1
    while(l < r) {
      // console.log('lower',l, r)
      const mid = ~~(l + (r - l)/2)
      if(arr[mid] < s) l = mid + 1
      else r = mid
    }
    return l
  }

  function upper(arr,s, e) {
    let l = 0, r = arr.length - 1
    while(l < r) {

      const mid = r - ~~((r - l)/2)
      // console.log('upper', l, r, mid, e)
      if(arr[mid] > e) r = mid - 1
      else l = mid
    }
    return l
  }
}

// another

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

