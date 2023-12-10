class Interval {
  constructor(left, right) {
    this.left = left
    this.right = right
  }
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodPartitions = function (nums) {
  const mod = BigInt(1000000007)
  const mapFst = new Map()
  const mapLst = new Map()

  for (let i = 0; i < nums.length; i++) {
    const item = nums[i]
    if (mapFst.has(item)) {
      mapLst.set(item, i)
    } else {
      mapFst.set(item, i)
    }
  }

  const l = []
  for (const key of mapLst.keys()) {
    l.push(new Interval(mapFst.get(key), mapLst.get(key)))
  }
  l.sort((a, b) => a.left - b.left)

  const st = []
  for (let i = 0; i < l.length; i++) {
    const cur = l[i]
    if (st.length === 0) {
      st.push(cur)
    } else {
      const pre = st.pop()
      if (cur.left < pre.right) {
        st.push(new Interval(pre.left, Math.max(pre.right, cur.right)))
      } else {
        st.push(pre)
        st.push(cur)
      }
    }
  }

  let n = nums.length - 1
  while (st.length > 0) {
    const item = st.pop()
    n -= item.right - item.left
  }

  return BigInt(2) ** BigInt(n) % mod
}
