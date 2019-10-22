/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
const computeArea = function(A, B, C, D, E, F, G, H) {
  const areaA = (C - A) * (D - B)
  const areaB = (G - E) * (H - F)
  const intersectionArea =
    Math.max(0, Math.min(C, G) - Math.max(A, E)) *
    Math.max(0, Math.min(D, H) - Math.max(B, F))
  return areaA + areaB - intersectionArea
}


// another


/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
const computeArea = function(A, B, C, D, E, F, G, H) {
  const x1 = A,
    x2 = C,
    x3 = E,
    x4 = G
  const y1 = B,
    y2 = D,
    y3 = F,
    y4 = H
  return (
    area(x1, y1, x2, y2) +
    area(x3, y3, x4, y4) -
    delta(x1, x2, x3, x4) * delta(y1, y2, y3, y4)
  )
}

function area(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) * Math.abs(y1 - y2)
}

function delta(v1, v2, v3, v4) {
  if (v1 > v2) {
    let tmp = v1
    v1 = v2
    v2 = tmp
  }
  if (v3 > v4) {
    let tmp = v3
    v3 = v4
    v4 = tmp
  }
  if (v3 >= v2 || v4 <= v1) return 0
  return Math.min(v2, v4) - Math.max(v1, v3)
}
