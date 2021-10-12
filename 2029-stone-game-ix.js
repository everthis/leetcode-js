/**
 * @param {number[]} stones
 * @return {boolean}
 */
const stoneGameIX = function(stones) {
  const cnt = Array(3).fill(0), { abs } = Math 
  for (let a of stones) cnt[a % 3]++;
  if (cnt[0] % 2 == 0) return cnt[1] && cnt[2]
  return abs(cnt[1] - cnt[2]) >= 3
};
