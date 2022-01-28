/**
 * @param {number[][]} targetGrid
 * @return {boolean}
 */
const isPrintable = function (targetGrid) {
  const posMin = Array.from({ length: 61 }, () => Array(2).fill(61))
  const posMax = Array.from({ length: 61 }, () => Array(2).fill(0))
  const m = targetGrid.length
  const n = targetGrid[0].length
  let colorSet = new Set()

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let c = targetGrid[i][j]
      colorSet.add(c)
      posMin[c][0] = Math.min(posMin[c][0], i) //Up
      posMin[c][1] = Math.min(posMin[c][1], j) //Left
      posMax[c][0] = Math.max(posMax[c][0], i) //Down
      posMax[c][1] = Math.max(posMax[c][1], j) //Right
    }
  }
  while (colorSet.size) {
    const tmp = new Set()
    for (let color of colorSet) {
      if (!isRect(targetGrid, color)) {
        tmp.add(color)
      }
    }

    if (tmp.size === colorSet.size) return false
    colorSet = tmp
  }

  return true

  function isRect(A, c) {
    for (let i = posMin[c][0]; i <= posMax[c][0]; i++) {
      for (let j = posMin[c][1]; j <= posMax[c][1]; j++) {
        if (A[i][j] > 0 && A[i][j] !== c) return false
      }
    }

    for (let i = posMin[c][0]; i <= posMax[c][0]; i++) {
      for (let j = posMin[c][1]; j <= posMax[c][1]; j++) {
        A[i][j] = 0
      }
    }

    return true
  }
}

// another

/**
 * @param {number[][]} targetGrid
 * @return {boolean}
 */
const isPrintable = function (targetGrid) {
  /*
     1 -> 3
     1 -> 4
     1 -> 5
     3 -> 4
    */

  const dependencies = {}

  /*
    3: [mini, maxi, minj, maxj]
    */
  const extents = {}

  for (let i = 0; i < targetGrid.length; i++) {
    for (let j = 0; j < targetGrid[i].length; j++) {
      const n = targetGrid[i][j]
      let inf = Infinity
      extents[n] = extents[n] || {
        n,
        mini: inf,
        minj: inf,
        maxi: -inf,
        maxj: -inf,
      }
      extents[n].mini = Math.min(i, extents[n].mini)
      extents[n].minj = Math.min(j, extents[n].minj)
      extents[n].maxi = Math.max(i, extents[n].maxi)
      extents[n].maxj = Math.max(j, extents[n].maxj)
    }
  }

  function canRemove(obj) {
    for (let i = obj.mini; i <= obj.maxi; i++) {
      for (let j = obj.minj; j <= obj.maxj; j++) {
        const val = targetGrid[i][j]
        if (val !== null && val !== obj.n) return false
      }
    }
    return true
  }

  function remove(obj) {
    for (let i = obj.mini; i <= obj.maxi; i++) {
      for (let j = obj.minj; j <= obj.maxj; j++) {
        targetGrid[i][j] = null
      }
    }
    delete extents[obj.n]
  }

  while (Object.keys(extents).length > 0) {
    let found = false
    for (const n in extents) {
      const obj = extents[n]
      if (canRemove(obj)) {
        remove(obj)
        found = true
        break
      }
    }
    if (!found) {
      return false
    }
  }
  return true
}

