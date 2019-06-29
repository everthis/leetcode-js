/**
 * @param {number[]} nums
 * @return {boolean}
 */
const judgePoint24 = function(nums) {
  return dfs(nums);
};

function dfs(list) {
  if (list.length === 1) {
    if (Math.abs(list[0] - 24) < 0.001) {
      return true;
    }
    return false;
  }
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      for (let c of compute(list[i], list[j])) {
        let nextRound = [];
        nextRound.push(c);
        for (let k = 0; k < list.length; k++) {
          if (k === j || k === i) continue;
          nextRound.push(list[k]);
        }
        if (dfs(nextRound)) return true;
      }
    }
  }
  return false;
}

function compute(a, b) {
  return [a + b, a - b, b - a, a * b, a / b, b / a];
}
