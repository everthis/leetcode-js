/**
 * @param {number[]} hens
 * @param {number[]} grains
 * @return {number}
 */
var minimumTime = function (hens, grains) {
  hens.sort((a, b) => a - b)
  grains.sort((a, b) => a - b)
  let lo = 0,
    hi = 1e9
  while (lo < hi) {
    let mid = Math.floor(lo + (hi - lo) / 2),
      i = 0
    for (let h of hens) {
      for (
        let ii = i;
        i < grains.length &&
        ((grains[i] <= h && h - grains[i] <= mid) ||
          (h <= grains[ii] && grains[i] - h <= mid) ||
          (grains[ii] <= h &&
            h <= grains[i] &&
            grains[i] - grains[ii] + Math.min(grains[i] - h, h - grains[ii]) <=
              mid));
        ++i
      );
    }

    if (i == grains.length) hi = mid
    else lo = mid + 1
  }
  return lo
}
