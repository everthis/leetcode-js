/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumLength = function (nums) {
  const um = new Map()

  for (const val of nums) {
    if (um.has(val)) {
      um.set(val, um.get(val) + 1)
    } else {
      um.set(val, 1)
    }
  }

  if (um.size === 1) {
    return 1
  }

  let cnt = 0
  let res = 1

  for (const [key, value] of um) {
    // .5 = 1/2 which is square root
    let fnd = Math.pow(key, 0.5)
    cnt = 1

    // yha condition greate than equal 2 isiliye rkha
    // to avoid the infinite loop as use calculator
    // and find root(2)->root(root(2))...so on
    // it will never end
    while (fnd >= 2) {
      if (um.has(fnd)) {
        if (um.get(fnd) >= 2) {
          cnt += 2
        } else {
          break
        }
        fnd = Math.pow(fnd, 0.5)
      } else {
        break
      }
    }

    res = Math.max(res, cnt)
    cnt = 0
  }

  let maxi = 0
  if (um.has(1)) {
    maxi = um.get(1)
  }

  if (maxi > ans) {
    if (maxi & 1) {
      return maxi
    }
    return maxi - 1
  }

  return res
}
