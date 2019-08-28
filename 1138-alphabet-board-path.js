/**
 * @param {string} target
 * @return {string}
 */
const alphabetBoardPath = function(target) {
  let sx = 0,
    sy = 0;
  let dir = "";
  let a = "a".charCodeAt(0);
  for (let c of target) {
    let dx = (c.charCodeAt(0) - a) % 5,
      dy = ((c.charCodeAt(0) - a) / 5) >> 0,
      n;
    if (sx > dx) {
      n = sx - dx;
      while (n--) dir += "L";
    }
    if (sy < dy) {
      n = dy - sy;
      while (n--) dir += "D";
    }
    if (sy > dy) {
      n = sy - dy;
      while (n--) dir += "U";
    }
    if (sx < dx) {
      n = dx - sx;
      while (n--) dir += "R";
    }
    dir += "!";
    (sx = dx), (sy = dy);
  }
  return dir;
};
