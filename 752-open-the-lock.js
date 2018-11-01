/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
const openLock = function(deadends, target, count = 0) {
  let deadSet = new Set(deadends);
  let visited = new Set();
  if (deadSet.has("0000")) {
    return -1;
  }

  let q = [];
  q.push("0000");
  visited.add("0000");

  let steps = 0;
  while (q.length > 0) {
    let len = q.length;

    for (let j = 0; j < len; j++) {
      let cur = q.shift();

      for (let i = 0; i < 4; i++) {
        let slot = parseInt(cur[i]);
        let before = cur.substr(0, i);
        let after = cur.substr(i + 1);

        let left = (10 + slot - 1) % 10;
        let leftCode = before + left + after;
        if (!visited.has(leftCode) && !deadSet.has(leftCode)) {
          if (leftCode === target) {
            return steps + 1;
          }

          visited.add(leftCode);
          q.push(leftCode);
        }

        let right = (10 + slot + 1) % 10;
        let rightCode = before + right + after;
        if (!visited.has(rightCode) && !deadSet.has(rightCode)) {
          if (rightCode === target) {
            return steps + 1;
          }

          visited.add(rightCode);
          q.push(rightCode);
        }
      }
    }
    steps++;
  }

  return -1;
};
