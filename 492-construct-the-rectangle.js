/**
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = function(area) {
  let w = Math.sqrt(area) >> 0;
  while (area % w != 0) w--;
  return [(area / w) >> 0, w];
};
