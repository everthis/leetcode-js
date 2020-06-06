const Skiplist = function () {
  this.maxLvl = ~~Math.log2(20000)
  this.levels = [...Array(this.maxLvl)].map(() => new Node(-1))
  for (let i = this.maxLvl - 1; i > 0; i--) {
    this.levels[i].down = this.levels[i - 1]
  }
  this.head = this.levels[this.maxLvl - 1]
}

/**
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function (target) {
  const pre = this.iter(target)
  return !pre[0].next ? false : pre[0].next.val === target
}

Skiplist.prototype.iter = function (target) {
  let cur = this.head
  const pre = []
  for (let i = this.maxLvl - 1; i >= 0; i--) {
    while (cur.next && cur.next.val < target) cur = cur.next
    pre[i] = cur
    cur = cur.down
  }
  return pre
}

/**
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function (num) {
  const pre = this.iter(num)
  const lvs = decideLevels(this.maxLvl)
  for (let i = 0; i < lvs; i++) {
    const next = pre[i].next
    pre[i].next = new Node(num)
    pre[i].next.next = next
    if (i > 0) pre[i].next.down = pre[i - 1].next
  }
}

/**
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function (num) {
  const pre = this.iter(num)
  let ret
  if (!pre[0].next || pre[0].next.val !== num) return false
  for (let i = this.maxLvl - 1; i >= 0; i--) {
    if (pre[i].next && pre[i].next.val === num) {
      const toBeDeleted = pre[i].next
      pre[i].next = toBeDeleted.next
      toBeDeleted.next = null
      toBeDeleted.down = null
    }
  }
  return true
}

/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */

const decideLevels = (max) => {
  let ans = 1
  while (Math.random() > 0.5 && ans < max) ans++
  return ans
}

const Node = function (val) {
  this.val = val
  this.next = null
  this.down = null
}
