/**
 * @param {number[][]} board
 * @return {number}
 */
const slidingPuzzle = function(board) {
  const target = "123450";
  let start = "";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      start += board[i][j];
    }
  }
  const visited = {};
  // all the positions 0 can be swapped to
  const dirs = [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]];
  const queue = [];
  queue.push(start);
  visited[start] = true;
  let res = 0;
  while (queue.length !== 0) {
    // level count, has to use size control here, otherwise not needed
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let cur = queue.shift();
      if (cur === target) {
        return res;
      }
      let zero = cur.indexOf("0");
      // swap if possible
      for (let dir of dirs[zero]) {
        let next = swap(cur, zero, dir);
        if (visited.hasOwnProperty(next)) {
          continue;
        }
        visited[next] = true;
        queue.push(next);
      }
    }
    res++;
  }
  return -1;
};

function swap(str, i, j) {
  const arr = str.split("");
  const ic = str[i];
  const jc = str[j];
  arr.splice(i, 1, jc);
  arr.splice(j, 1, ic);
  return arr.join("");
}
