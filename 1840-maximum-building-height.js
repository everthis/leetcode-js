/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @return {number}
 */
var maxBuilding = function (n, restrictions) {
  restrictions.sort((a, b) => a[0] - b[0]);
  let prevInd = 1,
    prevH = 0;
  for (let i = 0; i < restrictions.length; i++) {
    restrictions[i][1] = Math.min(
      restrictions[i][1],
      prevH + (restrictions[i][0] - prevInd)
    );
    prevInd = restrictions[i][0];
    prevH = restrictions[i][1];
  }

  for (let i = restrictions.length - 2; i >= 0; i--) {
    restrictions[i][1] = Math.min(
      restrictions[i][1],
      restrictions[i + 1][1] + (restrictions[i + 1][0] - restrictions[i][0])
    );
  }

  let ph = 0,
    pInd = 1,
    highest = 0;
  for (let i = 0; i < restrictions.length; i++) {
    let ind = restrictions[i][0];
    let h = restrictions[i][1];
    if (ph < h) {
      h = Math.min(h, ph + (ind - pInd));

      let remains = Math.max(0, ind - pInd - (h - ph));
      highest = Math.max(highest, h + ~~(remains / 2));
    } else {
      let remains = ind - pInd - (ph - h);
      highest = Math.max(highest, ph + ~~(remains / 2));
    }
    ph = h;
    pInd = ind;
  }
  highest = Math.max(highest, ph + (n - pInd));
  return highest;
};
