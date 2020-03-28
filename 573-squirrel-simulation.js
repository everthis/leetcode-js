/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} tree
 * @param {number[]} squirrel
 * @param {number[][]} nuts
 * @return {number}
 */
const minDistance = function(height, width, tree, squirrel, nuts) {
  const arr = nuts.map(el => 2 * distance(el, tree))
  const sum = arr.reduce((ac, el) => ac + el, 0)
  let res = Number.MAX_VALUE
  for(let i = 0, len = arr.length; i < len; i++) {
    let tmp = sum - arr[i] + distance(squirrel, nuts[i]) + distance(nuts[i], tree)
    res = Math.min(res, tmp)
  }
  return res
};

function distance(p1, p2) {
  return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1])
}

// another

/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} tree
 * @param {number[]} squirrel
 * @param {number[][]} nuts
 * @return {number}
 */
const minDistance = function (height, width, tree, squirrel, nuts) {
  let sum = 0,
    maxDiff = -Number.MAX_VALUE
  for (let nut of nuts) {
    const dist = Math.abs(tree[0] - nut[0]) + Math.abs(tree[1] - nut[1])
    sum += 2 * dist
    maxDiff = Math.max(
      maxDiff,
      dist - Math.abs(squirrel[0] - nut[0]) - Math.abs(squirrel[1] - nut[1])
    )
  }
  return sum - maxDiff
}
