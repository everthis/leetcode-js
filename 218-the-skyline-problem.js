/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
const getSkyline = function(buildings) {
  const hash = {}
  for(const b of buildings) {
    const [s, e, h] = b
    if(hash[s] == null) hash[s] = []
    if(hash[e] == null) hash[e] = []
    hash[s].push(h)
    hash[e].push(-h)
  }
  const ms = new MultiSet()
  const res = []

  for(const [pos, hs] of Object.entries(hash)) {
    for(const h of hs) {
      if(h > 0) {
        ms.add(h)
      } else {
        ms.remove(-h)
      }
    }
    const h = ms.max || 0
    if(res.length === 0 || res[res.length - 1][1] !== h) {
      res.push([+pos, h])
    }
  }


  return res
};

class MultiSet {
  constructor() {
    this.countMap = new Map()
    this.valueList = []
  }
  remove(value) {
    if(!this.countMap.has(value)) return false
    let index = binarySearch(this.valueList, value)
    if (this.countMap.get(value) === 1) {
      this.valueList.splice(index, 1)
      this.countMap.delete(value)
    } else {
      this.countMap.set(value, (this.countMap.get(value) || 0) - 1)
    }
    return true
  }
  add(value) {
    let index = binarySearch(this.valueList, value)
    if (index < 0) {
      this.valueList.splice(-index - 1, 0, value)
      this.countMap.set(value, 1)
    } else {
      this.countMap.set(value, this.countMap.get(value) + 1)
    }
  }
  get max() {
    return this.valueList[this.valueList.length - 1]
  }
  get min() {
    return this.valueList[0]
  }
}

function binarySearch(arr, val) {
  let l = 0, r = arr.length
  while( l < r ) {
    const mid = Math.floor((l + r) / 2)
    if(arr[mid] < val) {
       l = mid + 1
    } else {
      r = mid
    }
  }
  if(arr[l] !== val) return -(l + 1)
  
  return l
}

// another


/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
    const edgeSet = new Set();
    for (let i = 0; i < buildings.length; i++) {
        const [from, to] = buildings[i];
        edgeSet.add(from);
        edgeSet.add(to);
    }
    const positions = [...edgeSet];
    positions.sort((a, b) => a - b);

    const pq = new PriorityQueue({compare: (a, b) => b[2] - a[2]});

    const result = [];

    let j = 0;
    for (let i = 0; i < positions.length; i++) {
        const position = positions[i];

        for (j; j < buildings.length && buildings[j][0] <= position; j++) {
            pq.enqueue(buildings[j]);
        }

        while (!pq.isEmpty() && pq.front()[1] <= position) {
            pq.dequeue();
        }

        let maxHeight = pq.front()?.[2] ?? 0;

        if (!result.length || result.at(-1)[1] !== maxHeight) {
            result.push([position, maxHeight]);
        }
    }

    return result;
};

// another


/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
const getSkyline = function getSkyline(
  buildings,
  begin = 0,
  end = buildings.length
) {
  if (begin === end) {
    return []
  } else if (end - begin === 1) {
    const [Li, Ri, Hi] = buildings[begin]
    return [[Li, Hi], [Ri, 0]]
  } else {
    const pivotIndex = begin + Math.ceil((end - begin) / 2)
    return combineOutputs(
      getSkyline(buildings, begin, pivotIndex),
      getSkyline(buildings, pivotIndex, end)
    )
  }
}

function combineOutputs(a, b) {
  let aIndex = 0
  const aLength = a.length
  let bIndex = 0
  const bLength = b.length
  let aHeight = 0
  let bHeight = 0
  const combined = []
  while (aIndex < aLength || bIndex < bLength) {
    if (aIndex < aLength && bIndex === bLength) {
      return combined.concat(a.slice(aIndex))
    } else if (bIndex < bLength && aIndex === aLength) {
      return combined.concat(b.slice(bIndex))
    } else {
      const previousMax = Math.max(aHeight, bHeight)
      const nextX = Math.min(a[aIndex][0], b[bIndex][0])
      if (a[aIndex][0] === nextX) {
        aHeight = a[aIndex][1]
        aIndex++
      }
      if (b[bIndex][0] === nextX) {
        bHeight = b[bIndex][1]
        bIndex++
      }
      const newMax = Math.max(aHeight, bHeight)
      if (newMax !== previousMax) {
        combined.push([nextX, newMax])
      }
    }
  }
  return combined
}


// another

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
const getSkyline = function (buildings) {
  const n = buildings.length
  const arr = []
  const res = []
  for(const [s, e, h] of buildings) {
      arr.push([s, -h])
      arr.push([e, h])
  }
  arr.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
  const ms = new MultiSet()
  ms.insert(0)
  let pre = 0
  for(const [p, h] of arr) {
    h < 0 ? ms.insert(-h) : ms.eraseOne(h)
    const cur = ms.last()
    if(cur !== pre) {
        res.push([p, cur])
        pre = cur
    }
  }
  
  
  return res
}

//////////////////////// Template //////////////////////////////////
function Bisect() {
    return { insort_right, insort_left, bisect_left, bisect_right }
    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_right(a, x, lo = 0, hi = null) { // > upper_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] > x ? hi = mid : lo = mid + 1;
        }
        return lo;
    }
    function insort_left(a, x, lo = 0, hi = null) {
        lo = bisect_left(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_left(a, x, lo = 0, hi = null) { // >= lower_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

function MultiSet(elements) {
    let a = [], m = new Map(), bi = new Bisect();
    initialize();
    return { insert, first, last, get, search, poll, pollLast, lower_bound, upper_bound, findKth, eraseByIndex, eraseOne, eraseAll, contains, size, clear, show };
    function initialize() {
        if (elements) {
            for (const x of elements) {
                bi.insort_right(a, x);
                m.set(x, m.get(x) + 1 || 1);
            }
        }
    }
    function insert(x) {
        bi.insort_right(a, x);
        m.set(x, m.get(x) + 1 || 1);
    }
    function first() {
        return a[0];
    }
    function last() {
        return a[a.length - 1];
    }
    function get(i) {
        return a[i];
    }
    function poll() {
        let res = a[0];
        a.splice(0, 1);
        removeOneOrManyMap(m, res);
        return res;
    }
    function pollLast() {
        let res = a.pop();
        removeOneOrManyMap(m, res);
        return res;
    }
    function lower_bound(x) {
        return bi.bisect_left(a, x);
    }
    function upper_bound(x) {
        return bi.bisect_right(a, x);
    }
    function findKth(k) {
        return a[k - 1];
    }
    function search(x) {
        return lower_bound(x);
    }
    function eraseByIndex(idx) {
        removeOneOrManyMap(m, a[idx]);
        a.splice(idx, 1);
    }
    function eraseOne(x) {
        let idx = lower_bound(x);
        if (a[idx] == x) a.splice(idx, 1);
        removeOneOrManyMap(m, x);
    }
    function eraseAll(x) {
        if (contains(x)) {
            let idx = search(x), occ = m.get(x);
            while (occ--) a.splice(idx, 1);
            m.delete(x);
        }
    }
    function removeOneOrManyMap(m, x, cnt = 1) {
        let occ = m.get(x);
        occ > cnt ? m.set(x, occ - cnt) : m.delete(x);
    }
    function contains(x) {
        return m.has(x);
    }
    function size() {
        return a.length;
    }
    function clear() {
        a = [];
        m.clear();
    }
    function show() {
        return a;
    }
}
///////////////////////////////////////////////////////////////////
