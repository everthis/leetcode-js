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

// another

/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
const maxBoxesInWarehouse = function(boxes, warehouse) {
  if(warehouse == null || warehouse.length === 0) return 0
  const m = boxes.length, n = warehouse.length
  for(let i = 1; i < n; i++) {
    warehouse[i] = Math.min(warehouse[i], warehouse[i - 1])
  }
  boxes.sort((a, b) => a - b)
  let res = 0
  for(let i = n - 1; i >= 0; i--) {
    if(res < m && boxes[res] <= warehouse[i]) res++
  }
  return res
};

// another

/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
const maxBoxesInWarehouse = function(boxes, warehouse) {
  if(warehouse == null || warehouse.length === 0) return 0
  const m = boxes.length, n = warehouse.length
  boxes.sort((a, b) => a - b)
  let i = m - 1, res = 0
  for(let house of warehouse) {
    while(i >= 0 && boxes[i] > house) i--
    if(i === -1) return res
    res++
    i--
  }
  return res
};
