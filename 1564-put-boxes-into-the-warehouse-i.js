/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
const maxBoxesInWarehouse = function(boxes, warehouse) {
  boxes.sort((a, b) => a - b)
  const m = boxes.length, n = warehouse.length
  let i = 0, j = 0
  for(; i < m && j < n; i++) {
    if(boxes[m - i - 1] <= warehouse[j]) {
      j++
    }
    if(j === n) return n
  }
  return j
};
