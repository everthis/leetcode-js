/**
 * @param {number[]} nums
 * @return {number}
 */
const maxEqualFreq = function (nums) {
  const freqCnt = {}, cnt = {}, { max } = Math

  let res = 0, maxF = 0, i = 0
  for(const e of nums) {
    if(cnt[e] == null) cnt[e] = 0
    cnt[e]++

    const f = cnt[e]

    if(freqCnt[f - 1] == null) freqCnt[f - 1] = 0
    if(freqCnt[f] == null) freqCnt[f] = 0
    
    if(freqCnt[f - 1] > 0) freqCnt[f - 1]--
    freqCnt[f]++

    maxF = max(maxF, f)

    /*
    cnt records the occurence of each num, freq records the frequence of number of occurences. max_F is the largest frequence.
    There are three cases which satify the condition:

    all elements appear exact once.
    all elements appear max_F times, except one appears once.
    all elements appear max_F-1 times, except one appears max_F.
    */
    if(
      maxF === 1 ||
      maxF * freqCnt[maxF] === i ||
      (maxF - 1) * (freqCnt[maxF - 1] + 1) === i
    ) {
      res = i + 1
    }

    i++
  }

  return res
}

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxEqualFreq = function (nums) {
  const cnt = {},
    freq = {}
  let maxF = 0,
    res = 0
  nums.forEach((num, i) => {
    if (cnt[num] == null) cnt[num] = 0
    cnt[num] += 1
    if (freq[cnt[num] - 1] == null) freq[cnt[num] - 1] = 0
    if (freq[cnt[num]] == null) freq[cnt[num]] = 0
    freq[cnt[num] - 1] -= 1
    freq[cnt[num]] += 1
    maxF = Math.max(maxF, cnt[num])
    if (
      maxF * freq[maxF] === i ||
      (maxF - 1) * (freq[maxF - 1] + 1) === i ||
      maxF === 1
    )
      res = i + 1
  })
  return res
}
