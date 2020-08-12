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
