/**
 * @param {number[]} xCoord
 * @param {number[]} yCoord
 * @return {number}
 */
var maxRectangleArea = function (xCoord, yCoord) {
  const n = xCoord.length
  const co = []
  const sy = imap(yCoord)

  for (let i = 0; i < n; i++) {
    co.push([xCoord[i], binarySearch(sy, yCoord[i])])
  }
  co.sort((a, b) => a[0] - b[0] || a[1] - b[1])

  let result = -1
  const map = new Map()
  const mapX = new Map()
  const ft = new Array(sy.length + 1).fill(0)
  for (let i = 0; i < co.length; i++) {
    addFenwick(ft, co[i][1], 1)

    if (i - 1 >= 0 && co[i][0] === co[i - 1][0]) {
      const yc = (BigInt(co[i][1]) << 32n) | BigInt(co[i - 1][1])
      const aft = sumFenwick(ft, co[i][1]) - sumFenwick(ft, co[i - 1][1] - 1)

      if (map.has(yc)) {
        const bef = map.get(yc)
        if (aft === bef + 2) {
          const x = mapX.get(yc)
          const S =
            BigInt(co[i][0] - x) * BigInt(sy[co[i][1]] - sy[co[i - 1][1]])
          result = Number(BigInt(result) > S ? result : S)
        }
      }

      map.set(yc, aft)
      mapX.set(yc, co[i][0])
    }
  }

  return result

  function sumFenwick(ft, i) {
    let sum = 0
    for (i += 1; i > 0; i -= i & -i) {
      sum += ft[i]
    }
    return sum
  }

  function addFenwick(ft, i, v) {
    if (v === 0 || i < 0) return
    for (i += 1; i < ft.length; i += i & -i) {
      ft[i] += v
    }
  }

  function imap(a) {
    const imap = Array.from(a)
    imap.sort((a, b) => a - b)
    let p = 1

    for (let i = 1; i < imap.length; i++) {
      if (imap[i] !== imap[p - 1]) imap[p++] = imap[i]
    }

    return imap.slice(0, p)
  }

  function binarySearch(nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
      const mid = (left + right) >> 1
      if (nums[mid] === target) return mid
      if (nums[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return -1
  }
}
