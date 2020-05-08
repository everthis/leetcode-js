/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function(coordinates) {
  const r = ratio(coordinates[0], coordinates[1])
  for(let i = 1, len = coordinates.length;  i < len - 1;  i++) {
    if(ratio(coordinates[i], coordinates[i + 1]) !== r) return false
  }
      
  return true
};

function ratio(a, b) {
  return (b[1] - a[1]) / (b[0] - a[0])
}
