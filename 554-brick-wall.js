/**
 * @param {number[][]} wall
 * @return {number}
 */
const leastBricks = function(wall) {
  const hash = {};
  let row;
  let rowSum = 0;
  for (let i = 0; i < wall.length; i++) {
    rowSum = 0;
    row = wall[i];
    for (let j = 0; j < row.length - 1; j++) {
      rowSum += row[j];
      hash[rowSum] = hash.hasOwnProperty(rowSum) ? hash[rowSum] + 1 : 1;
    }
  }
  return (
    wall.length -
    (Object.keys(hash).length > 0
      ? Math.max(...Object.keys(hash).map(key => hash[key]))
      : 0)
  );
};

console.log(leastBricks([[1], [1], [1]]));
