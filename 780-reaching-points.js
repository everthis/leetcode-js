/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
const reachingPoints = function(sx, sy, tx, ty) {
  while (tx >= sx && ty >= sy) {
    if (tx === ty) break;
    if (tx > ty) {
       if (ty > sy) tx %= ty;
       else return (tx - sx) % ty === 0;
    } else {
      if (tx > sx) ty %= tx;
      else return (ty - sy) % tx === 0;
    }
  }
  return tx === sx && ty === sy;
};

