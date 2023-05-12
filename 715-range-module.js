
const RangeModule = function() {
  this.st = new SegmentTree();
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function(left, right) {
  this.st.add(left, right);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function(left, right) {
  return this.st.query(left, right);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.removeRange = function(left, right) {
  this.st.remove(left, right);
};

/** 
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */
class SegNode {
  constructor(l, r, state) {
    this.l = l;
    this.r = r;
    this.state = state;
    this.left = null;
    this.right = null; 
  }
}

function SegmentTree() {
    let root = new SegNode(0, 1e9, false);
    return { update, query, add, remove }
    function update(node, l, r, state) {
        if (l <= node.l && r >= node.r) {
            node.state = state;
            node.left = null;
            node.right = null;
            return node.state;
        }
        if (l >= node.r || r <= node.l) return node.state;
        let mid = node.l + parseInt((node.r - node.l) / 2);
        if (node.left == null) {
            node.left = new SegNode(node.l, mid, node.state);
            node.right = new SegNode(mid, node.r, node.state);
        }
        let left = update(node.left, l, r, state);
        let right = update(node.right, l, r, state);
        node.state = left && right;
        return node.state;
    }
    function query(l, r) {
        return dfs(root, l, r);
    }
    function dfs(node, l, r) {
        if (l >= node.r || r <= node.l) return true;
        if ((l <= node.l && r >= node.r) || (node.left == null)) return node.state;
        let mid = node.l + parseInt((node.r - node.l) / 2);
        if (r <= mid) {
            return dfs(node.left, l, r);
        } else if (l >= mid) {
            return dfs(node.right, l, r);
        } else {
            return dfs(node.left, l, r) && dfs(node.right, l, r);
        }
    }
    function add(l, r) {
        update(root, l, r, true);
    }
    function remove(l, r) {
        update(root, l, r, false);
    }
}


// another

const RangeModule = function() {
  this.range = []
}

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function(left, right) {
  let index1 = this.range.length
  let low = 0
  let high = this.range.length - 1
  while (low <= high) {
    const mid = (low + high) >> 1
    if (this.range[mid][1] >= left) {
      index1 = Math.min(index1, mid)
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  let index2 = -1
  low = 0
  high = this.range.length - 1
  while (low <= high) {
    const mid = (low + high) >> 1
    if (this.range[mid][0] <= right) {
      index2 = Math.max(index2, mid)
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  if (index1 === this.range.length) {
    this.range.push([left, right])
    return
  } else if (index2 === -1) {
    this.range.unshift([left, right])
    return
  }
  left = Math.min(left, this.range[index1][0])
  right = Math.max(right, this.range[index2][1])
  this.range.splice(index1, index2 - index1 + 1, [left, right])
}

/**
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function(left, right) {
  let index = -1
  let low = 0
  let high = this.range.length - 1
  while (low <= high) {
    const mid = (low + high) >> 1
    if (this.range[mid][0] <= left) {
      index = Math.max(index, mid)
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  if (index === -1 || this.range[index][1] < right) {
    return false
  }
  return true
}

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.removeRange = function(left, right) {
  let index1 = this.range.length
  let low = 0
  let high = this.range.length - 1
  while (low <= high) {
    const mid = (low + high) >> 1
    if (this.range[mid][1] >= left) {
      index1 = Math.min(index1, mid)
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  let index2 = -1
  low = 0
  high = this.range.length - 1
  while (low <= high) {
    const mid = (low + high) >> 1
    if (this.range[mid][0] <= right) {
      index2 = Math.max(index2, mid)
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  if (index1 === this.range.length || index2 === -1) {
    return
  }

  const newRange = []
  if (left > this.range[index1][0]) {
    newRange.push([this.range[index1][0], left])
  }
  if (right < this.range[index2][1]) {
    newRange.push([right, this.range[index2][1]])
  }
  this.range.splice(index1, index2 - index1 + 1, ...newRange)
}

/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */


// another

const RangeModule = function () {
  this.intervals = []
}

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function (left, right) {
  const n = this.intervals.length
  const tmp = []
  for (let i = 0; i <= n; i++) {
    const cur = this.intervals[i]

    if (i == n || cur[0] > right) {
      tmp.push([left, right])
      while (i < n) tmp.push(this.intervals[i++])
    } else if (cur[1] < left) tmp.push(cur)
    else {
      left = Math.min(left, cur[0])
      right = Math.max(right, cur[1])
    }
  }
  this.intervals = tmp
}

/**
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function (left, right) {
  const n = this.intervals.length
  let l = 0,
    r = n - 1
  while (l <= r) {
    let m = ~~(l + (r - l) / 2)
    if (this.intervals[m][0] >= right) r = m - 1
    else if (this.intervals[m][1] <= left) l = m + 1
    else return this.intervals[m][0] <= left && this.intervals[m][1] >= right
  }
  return false
}

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.removeRange = function (left, right) {
  const n = this.intervals.length
  const tmp = []
  for (let i = 0; i < n; i++) {
    const cur = this.intervals[i]
    if (cur[1] <= left || cur[0] >= right) tmp.push(cur)
    else {
      if (cur[0] < left) tmp.push([cur[0], left])
      if (cur[1] > right) tmp.push([right, cur[1]])
    }
  }
  this.intervals = tmp
}

/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */

// another

const RangeModule = function () {
  this.intervals = []
}

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function (left, right) {
  const tmp = []
  const n = this.intervals.length
  for(let i = 0; i <= n; i++) {
    const cur = this.intervals[i]
    if(i === n || cur[0] > right) {
      tmp.push([left, right])
      while(i < n) tmp.push(this.intervals[i++])
    }else if(cur[1] < left) {
      tmp.push(cur)
    }else {
      //      cur[0] <=    right
      // left      <= cur[1]
      left = Math.min(left, cur[0])
      right = Math.max(right, cur[1])
    }
  }
    // console.log(tmp)
  this.intervals = tmp
}

/**
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function (left, right) {
  const n = this.intervals.length, arr = this.intervals
  let l = 0, r = n - 1
  while(l <= r) {
    const mid = ~~(l + (r - l) / 2)
    if(arr[mid][0] >= right) r = mid - 1
    else if(arr[mid][1] <= left) l = mid + 1
    else return arr[mid][0] <= left && arr[mid][1] >= right
  }
  
  return false
}

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.removeRange = function (left, right) {
  const tmp = []
  const n = this.intervals.length
  
  for(let i = 0; i < n; i++) {
    const cur = this.intervals[i]
    if(cur[1] < left) {
      tmp.push(cur)
    }else if(cur[0] > right) tmp.push(cur)
    else {
      // left <= cur[1]
      //     cur[0]    <= right
      if(left > cur[0]) tmp.push([cur[0], left])
      if(right < cur[1]) tmp.push([right, cur[1]])
    }
  }
  // console.log(tmp)
  this.intervals = tmp
}

/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */

