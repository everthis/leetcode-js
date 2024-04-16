//#region Circular Queue
/**
 * @template TItem
 */
class CircularQueue {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    /**
     * @private
     * @type {number}
     */
    this._capacity = capacity
    /**
     * @private
     * @type {number}
     */
    this._size = 0
    /**
     * @private
     * @type {number}
     */
    this._bottom = 0

    /**
     * @private
     * @type {number}
     */
    this._maxSize = 0

    /**
     * @private
     * @type {TItem[]}
     */
    this._data = Array(capacity).fill(undefined)
  }

  /**
   * @private
   * @param {number} index
   * @returns {number}
   */
  _getCircularIndex(index) {
    const result = index % this._capacity
    if (result < 0) result += this._capacity
    return result
  }

  get capacity() {
    return this._capacity
  }

  get size() {
    return this._size
  }

  get nextItem() {
    return this._size ? this._data[this._bottom] : undefined
  }

  get lastItem() {
    return this._size
      ? this._data[this._getCircularIndex(this._bottom + this._size - 1)]
      : undefined
  }

  fromFirst(index) {
    return index < this._size
      ? this._data[this._getCircularIndex(this._bottom + index)]
      : undefined
  }

  fromLast(index) {
    return index < this._size
      ? this._data[
          this._getCircularIndex(this._bottom + this._size - 1 - index)
        ]
      : undefined
  }

  /**
   * @param  {...TItem} items
   */
  enqueue(...items) {
    if (this._size + items.length > this._capacity)
      throw new Error('Queue capacity exceeded.')

    let queueIndex = (this._bottom + this._size) % this._capacity
    this._size += items.length
    this._maxSize = Math.max(this._size, this._maxSize)
    for (let i = 0; i < items.length; ++i) {
      this._data[queueIndex] = items[i]
      queueIndex = (queueIndex + 1) % this._capacity
    }
  }

  /**
   * @returns {TItem | undefined}
   */
  dequeue() {
    if (!this._size) return undefined

    const result = this._data[this._bottom]
    this._bottom = (this._bottom + 1) % this._capacity
    --this._size

    return result
  }

  /**
   * @returns {TItem | undefined}
   */
  popLast() {
    if (!this._size) return undefined

    --this._size
    const result = this._data[(this._bottom + this._size) % this._capacity]

    return result
  }

  clear() {
    this._size = 0
  }

  get maxSize() {
    return this._maxSize
  }

  asArray() {
    let res = []
    for (let i = 0; i < this._size; ++i) {
      res.push(this.fromFirst(i))
    }

    return res
  }
}
//#endregion

let oo = 1048575
let dp = new Uint32Array(10001)
let dq = new CircularQueue(10001)

//#region Segment tree
let st = new Uint32Array(40004)

function buildST(nums, root, l, r) {
  if (l == r) {
    st[root] = nums[l]
    return
  }

  let m = (l + r) >> 1
  let c = root * 2 + 1
  buildST(nums, c, l, m)
  buildST(nums, c + 1, m + 1, r)

  st[root] = st[c] & st[c + 1]
}

function queryST(ql, qr, root, l, r) {
  if (qr < l || ql > r) return oo
  if (ql <= l && r <= qr) return st[root]

  let m = (l + r) >> 1
  let c = root * 2 + 1
  let x = queryST(ql, qr, c, l, m)
  let y = queryST(ql, qr, c + 1, m + 1, r)

  return x & y
}
//#endregion


/**
 * @param {number[]} nums
 * @param {number[]} andValues
 * @return {number}
 */
var minimumValueSum = function (nums, andValues) {
  let n = nums.length
  let m = andValues.length
  buildST(nums, 0, 0, n - 1)

  dp.fill(oo, 0, n)
  let a = nums[0]
  let t = andValues[0]
  for (let i = 0; i < n; ++i) {
    a &= nums[i]

    if (a == t) {
      dp[i] = nums[i]
    }
  }

  for (let j = 1; j < m; ++j) {
    dq.clear()
    t = andValues[j]
    let ll = n
    let rr = n - 1

    for (let i = n - 1; i >= 0; --i) {
      if (rr > i) {
        rr = i
      }

      a = queryST(rr, i, 0, 0, n - 1)
      while (rr > 1 && a > t && (a & nums[rr - 1]) >= t) {
        a &= nums[--rr]
      }

      if (a != t || !rr) {
        dp[i] = oo
        continue
      }

      if (ll > rr) {
        ll = rr
        dq.clear()
        dq.enqueue(ll - 1)
      }

      while (ll > 1 && (a & nums[ll - 1]) == a) {
        --ll

        while (dq.size && dp[ll - 1] <= dp[dq.fromLast(0)]) {
          dq.popLast()
        }
        dq.enqueue(ll - 1)
      }

      while (dq.size && dq.fromFirst(0) >= rr) {
        dq.dequeue()
      }

      dp[i] = Math.min(dp[dq.fromFirst(0)] + nums[i], oo)
    }
  }

  return dp[n - 1] >= oo ? -1 : dp[n - 1]
}
