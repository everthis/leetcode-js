/**
 * @param {number[]} stones
 * @return {number[]}
 */
const numMovesStonesII = function(stones) {
stones.sort((a, b) => a - b)
let n = stones.length;
let least = Number.MAX_VALUE, most = Number.MIN_VALUE;

for (let i = 0, j = 0; i < n; i++) {
  while (j + 1 < n && stones[j + 1] - stones[i] < n) j++;
  let now = n - (j - i + 1);
  if (j - i == n - 2 && stones[j] - stones[i] == j - i) now++;
  least = Math.min(least, now);
}

most = Math.max(stones[n - 1] - stones[1], stones[n - 2] - stones[0]) - (n - 2);
return [least, most];
};
