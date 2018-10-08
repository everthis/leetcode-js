/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  const res = [];
  bt(candidates, target, res, [], 0);
  return res;
};

function bt(candidates, target, res, combination, start) {
  if (target === 0) {
    res.push(combination.slice(0));
    return;
  }
  for (let i = start; i < candidates.length && target >= candidates[i]; i++) {
    if (i > 0 && candidates[i] === candidates[i - 1] && i > start) continue;
    combination.push(candidates[i]);
    bt(candidates, target - candidates[i], res, combination, i + 1);
    combination.pop();
  }
}
