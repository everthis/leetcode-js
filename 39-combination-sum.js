/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
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
    combination.push(candidates[i]);
    bt(candidates, target - candidates[i], res, combination, i);
    combination.pop();
  }
}
