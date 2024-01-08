/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
   let res = 0
   const n = dimensions
   const arr = dimensions.map(([l,w]) => [l ** 2 + w ** 2, l * w])
   arr.sort((a, b) => a[0] === b[0] ?  b[1] - a[1] : b[0] - a[0])
   return arr[0][1]
};
