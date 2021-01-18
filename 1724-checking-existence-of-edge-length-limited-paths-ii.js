const DistanceLimitedPathsExist = function (n, edgeList) {
  edgeList.sort((a, b) => a[2] - b[2])
  this.dis = []
  this.uf = new SnapshotUF(n)
  let cur_dis = 0
  for (let e of edgeList) {
    if (e[2] > cur_dis) {
      this.dis.push(cur_dis)
      cur_dis = e[2]
      this.uf.snap()
    }
    this.uf.union(e[0], e[1])
  }
  this.dis.push(cur_dis)
  this.uf.snap()
}

DistanceLimitedPathsExist.prototype.query = function (p, q, limit) {
  let snap_id = lower_bound(this.dis, limit) - this.dis[0] - 1
  return this.uf.check(p, q, snap_id)
}

class SnapshotArray {
  constructor(length) {
    this.tim = 0
    this.vec = Array.from({ length: length }, () => [0])
    this.ti = Array.from({ length: length }, () => [0])
  }
  set(index, val) {
    if (this.ti[index][this.ti.length - 1] === this.tim) {
      this.vec[index][this.vec[index].length - 1] = val
    } else {
      this.ti[index].push(this.tim)
      this.vec[index].push(val)
    }
  }
  get(idx, snapId) {
    const p = lower_bound(this.ti[idx], snapId + 1) - this.ti[idx][0] - 1
    return this.vec[idx][p]
  }
  snap() {
    return this.tim++
  }
}

class SnapshotUF extends SnapshotArray {
  constructor(n) {
    super(n)
    for (let i = 0; i < n; i++) this.set(i, -1)
  }
  find(x, snap_id) {
    let rep = this.get(x, snap_id)
    if (rep < 0) return x
    return this.find(rep, snap_id)
  }
  union(x, y) {
    let px = this.find(x, this.tim)
    let py = this.find(y, this.tim)
    if (px == py) return
    let sizepx = -1 * this.get(px, this.tim)
    let sizepy = -1 * this.get(py, this.tim)
    if (sizepx >= sizepy) {
      this.set(px, -1 * sizepx + -1 * sizepy)
      this.set(py, px)
    } else {
      this.set(py, -1 * sizepx + -1 * sizepy)
      this.set(px, py)
    }
  }
  check(x, y, snap_id) {
    return this.find(x, snap_id) === this.find(y, snap_id)
  }
}

function lower_bound(array, arg1, arg2, arg3, arg4) {
  let first
  let last
  let value
  let less
  if (arg3 === undefined) {
    first = 0
    last = array.length
    value = arg1
    less = arg2
  } else {
    first = arg1
    last = arg2
    value = arg3
    less = arg4
  }

  if (less === undefined) {
    less = function (a, b) {
      return a < b
    }
  }

  let len = last - first
  let middle
  let step
  while (len > 0) {
    step = Math.floor(len / 2)
    middle = first + step
    if (less(array[middle], value, middle)) {
      first = middle
      first += 1
      len = len - step - 1
    } else {
      len = step
    }
  }
  return first
}

/**
 * Your DistanceLimitedPathsExist object will be instantiated and called as such:
 * DistanceLimitedPathsExist* obj = new DistanceLimitedPathsExist(n, edgeList);
 * bool param_1 = obj->query(p,q,limit);
 */
