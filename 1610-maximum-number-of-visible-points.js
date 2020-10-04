/**
 * @param {number[][]} points
 * @param {number} angle
 * @param {number[]} location
 * @return {number}
 */
const visiblePoints = function (points, angle, location) {
  const angles = [];
  let count = 0;
  for (let p of points) {
    let dx = p[0] - location[0];
    let dy = p[1] - location[1];
    if (dx == 0 && dy == 0) {
      // edge case of same point
      count++;
      continue;
    }
    angles.push(Math.atan2(dy, dx) * (180 / Math.PI));
  }
  angles.sort();
  const tmp = angles.slice();
  for (let d of angles) tmp.push(d + 360); // concatenate to handle edge case
  let res = count;
  for (let i = 0, j = 0; i < tmp.length; i++) {
    while (tmp[i] - tmp[j] > angle) {
      j++;
    }
    res = Math.max(res, count + i - j + 1);
  }
  return res;
};
