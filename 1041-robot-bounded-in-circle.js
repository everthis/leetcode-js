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

// another

/**
 * @param {string} instructions
 * @return {boolean}
 */
const isRobotBounded = function(instructions) {
  let x = 0, y = 0, i = 0
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]] // U, R, D, L
  for(let e of instructions) {
    if(e === 'R') {
      i = (i + 1) % 4
    } else if(e === 'L') {
      i = (i + 3) % 4
    } else {
      x += dirs[i][0]
      y += dirs[i][1]
    }
  }
  return x === 0 && y === 0 || i > 0
};

// another

/**
 * @param {string} instructions
 * @return {boolean}
 */
const isRobotBounded = function(instructions) {
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let x = 0, y = 0, i = 0
  for(let ins of instructions) {
    if(ins === 'G') {
      const dir = dirs[i]
      x += dir[0]
      y += dir[1]
    } else if(ins === 'L') {
      i = i - 1 < 0 ? 3 : i - 1 
    } else if(ins === 'R') {
      i = i + 1 > 3 ? 0 : i + 1
    }
  }
  return x === 0 && y === 0 || i !== 0
};
