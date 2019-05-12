/**
 * @param {string} instructions
 * @return {boolean}
 */
const isRobotBounded = function(instructions) {
  let x = 0, y = 0, i = 0, d = [[0, 1], [1, 0], [0, -1], [ -1, 0]];
  for (let j = 0; j < instructions.length; ++j)
    if (instructions.charAt(j) === 'R') i = (i + 1) % 4;
    else if (instructions .charAt(j) === 'L') i = (i + 3) % 4;
    else {
        x += d[i][0]; y += d[i][1];
    }
  return x == 0 && y == 0 || i > 0;
};
