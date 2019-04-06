/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
const validSquare = function(p1, p2, p3, p4) {
  const lenArr = [
    distance(p1, p2),
    distance(p1, p3),
    distance(p1, p4),
    distance(p2, p3),
    distance(p2, p4),
    distance(p3, p4)
  ]
  const obj = {}
  for (let el of lenArr) {
    if (obj[el] != null) obj[el] += 1
    else obj[el] = 1
  }
  const keys = Object.keys(obj)

  return keys.length === 2 && (obj[keys[0]] === 2 || obj[keys[1]] === 2)
}

function distance(p1, p2) {
  return Math.sqrt(Math.pow(p1[1] - p2[1], 2) + Math.pow(p1[0] - p2[0], 2))
}
