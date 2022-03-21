/**
 * @param {string} directions
 * @return {number}
 */
const countCollisions = function(directions) {
  let res = 0, n = directions.length

  let flag = false
  // left -> right
  for(let i = 0; i < n; i++) {
    if(directions[i] !== 'L') {
      flag = true
    } else {
      res += flag ? 1 : 0
    }
  }
  flag = false
  // right -> left
  for(let i = n - 1; i >= 0; i--) {
    if(directions[i] !== 'R') {
      flag = true
    } else {
      res += flag ? 1 : 0
    }
  }

  return res
};
