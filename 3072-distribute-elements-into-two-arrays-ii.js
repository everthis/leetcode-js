/**
 * @param {number[]} nums
 * @return {number[]}
 */
const resultArray = function(nums) {
  const n = nums.length
  const a1 = [nums[0]], a2 = [nums[1]], a1s = [nums[0]], a2s = [nums[1]]
  for(let i = 2; i < n; i++) {
    const e = nums[i]
    const [gc1, s1] = bs(a1s, e)
    const [gc2, s2] = bs(a2s, e)
    if(gc1 > gc2) {
        a1.push(e)
        a1s.splice(s1, 0, e)
    } else if(gc1 < gc2) {
        a2.push(e)
        a2s.splice(s2, 0, e)
    } else if(a1.length > a2.length) {
        a2.push(e)
        a2s.splice(s2, 0, e)
    } else {
        a1.push(e)
        a1s.splice(s1, 0, e)
    }
  }
    
  return [...a1, ...a2]
    
  function bs(arr, val) {
     const n = arr.length
     let l = 0, r = n - 1
     while(l < r) {
         const mid = Math.floor((l + r) / 2)
         if(arr[mid] > val) r = mid
         else l = mid + 1
     }
     if(arr[l] <= val) l++
     return [n - l, l]
  }
};

// another

const binarySearch = function (arr, val) {
    let start = 0, 
        end = arr.length - 1
    while (start < end) {
        const mid = Math.floor((start + end) / 2)
        if (arr[mid] > val) {
            end = mid    
        } else {
            start = mid + 1 
        }
    }
    if (arr[start] <= val) {
        start++;
    }
    return [arr.length - start, start]
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const resultArray = function(nums) {
     const arr1 = [nums[0]],
           arr2 = [nums[1]]
     let sortedArr1 = [nums[0]],
         sortedArr2 = [nums[1]]
     for (let i = 2; i < nums.length; i++) {
         const n = nums[i],
               [gc1, s1] = binarySearch(sortedArr1, n),
               [gc2, s2] = binarySearch(sortedArr2, n)
         if (gc1 > gc2) {
             arr1.push(n)
             sortedArr1.splice(s1, 0, n)
         } else if (gc2 > gc1) {
             arr2.push(n)
             sortedArr2.splice(s2, 0, n)
         } else if (arr2.length < arr1.length){
             arr2.push(n)
             sortedArr2.splice(s2, 0, n)
         } else {
             arr1.push(n)
             sortedArr1.splice(s1, 0, n)
         }
     }
    return [...arr1, ...arr2]
};

// another


//#region AVL Tree
/**
 * @typedef {"keep-all" | "override" | "ignore"} DuplicateMode
 */
/**
 * @template TItem
 * @typedef {(a: TItem, b: TItem) => number} Comparer<TItem>
 */
/**
 * @template TItem
 * @typedef {Object} AvlConfigs<TItem>
 * @property {Comparer<TItem>} comparer
 * @property {DuplicateMode} duplicateMode Defines the behavior to add a node when the result of comparer is 0.
 * @property {AvlNodesPool} nodesPool Keeping node instances to avoid creating too many AVL Nodes.
 */

/**
 * @template TItem
 */
class AvlNode {
  /** @type {AvlNode<TItem> | undefined} */
  left;
  /** @type {AvlNode<TItem> | undefined} */
  right;

  /** @type {TItem} */
  value;

  /** @type {number} */
  height;
  /** @type {number} */
  size;

  /**
   * @param {TItem} value
   */
  constructor(value) {
    this.value = value;
    this.height = 1;
    this.size = 1;
  }

  getBalanceFactor() {
    return (this.left?.height ?? 0) - (this.right?.height ?? 0);
  }

  recalculateHeight() {
    this.height = 1 + Math.max(this.left?.height ?? 0, this.right?.height ?? 0);
  }

  recalculateSize() {
    this.size = 1 + (this.left?.size ?? 0) + (this.right?.size ?? 0);
  }

  dispose() {
    delete this.left;
    delete this.right;
    delete this.height;
    delete this.value;
    delete this.height;
    delete this.size;
  }
}

/**
 * @template TItem
 */
class AvlTree {
  //#region Constructor
  /**
   * @param {AvlConfigs<TItem>} configs
   */
  constructor(configs) {
    /** @private */
    this._comparer = configs.comparer;
    /** @private */
    this._duplicationMode = configs.duplicateMode ?? "keep-all";
    /** @private */
    this._nodesPool = configs.nodesPool;

    /** @private @type {AvlNode<TItem> | undefined} */
    this._root = undefined;
  }

  get size() {
    return this._root?.size ?? 0;
  }

  /**
   * @private
   * @param {number} order
   * @returns {number}
   */
  _adjustOrder(order) {
    return ((order % this.size) + this.size) % this.size;
  }

  /**
   * @private
   * @param {AvlNode<TItem>} parent
   * @param {number} parentOrder
   */
  _calculateLeftNodeOrder(parent, parentOrder) {
    return parentOrder - 1 - (parent?.left?.right?.size ?? 0);
  }

  /**
   * @private
   * @param {AvlNode<TItem>} parent
   * @param {number} parentOrder
   */
  _calculateRightNodeOrder(parent, parentOrder) {
    return parentOrder + 1 + (parent?.right?.left?.size ?? 0);
  }
  //#endregion

  //#region Balancing
  /**
   * @private
   * @param {AvlNode<TItem>} node
   * @returns {AvlNode<TItem>}
   */
  _rotateLeft(node) {
    let newTop = node.right;
    node.right = newTop.left;
    newTop.left = node;

    node.recalculateHeight();
    newTop.recalculateHeight();
    node.recalculateSize();
    newTop.recalculateSize();
    return newTop;
  }

  /**
   * @private
   * @param {AvlNode<TItem>} node
   * @returns {AvlNode<TItem>}
   */
  _rotateRight(node) {
    let newTop = node.left;
    node.left = newTop.right;
    newTop.right = node;

    node.recalculateHeight();
    newTop.recalculateHeight();
    node.recalculateSize();
    newTop.recalculateSize();
    return newTop;
  }

  /**
   * @private
   * @param {AvlNode<TItem>} node
   * @returns {AvlNode<TItem>}
   */
  _rotateDoubleLeft(node) {
    let newRight = node.right;
    let newTop = newRight.left;
    node.right = newTop.left;
    newRight.left = newTop.right;
    newTop.left = node;
    newTop.right = newRight;

    node.recalculateHeight();
    newRight.recalculateHeight();
    newTop.recalculateHeight();
    node.recalculateSize();
    newRight.recalculateSize();
    newTop.recalculateSize();
    return newTop;
  }

  /**
   * @private
   * @param {AvlNode<TItem>} node
   * @returns {AvlNode<TItem>}
   */
  _rotateDoubleRight(node) {
    let newLeft = node.left;
    let newTop = newLeft.right;
    node.left = newTop.right;
    newLeft.right = newTop.left;
    newTop.right = node;
    newTop.left = newLeft;

    node.recalculateHeight();
    newLeft.recalculateHeight();
    newTop.recalculateHeight();
    node.recalculateSize();
    newLeft.recalculateSize();
    newTop.recalculateSize();
    return newTop;
  }

  /**
   * @private
   * @param {AvlNode<TItem>} node
   * @returns {AvlNode<TItem>}
   */
  _balance(node) {
    let bf = node.getBalanceFactor();
    if (bf < -1) {
      bf = node.right.getBalanceFactor();
      if (bf < 0) return this._rotateLeft(node);
      else return this._rotateDoubleLeft(node);
    } else if (bf > 1) {
      bf = node.left.getBalanceFactor();
      if (bf > 0) return this._rotateRight(node);
      else return this._rotateDoubleRight(node);
    }

    return node;
  }
  //#endregion

  //#region Add
  /**
   * @private
   * @param {TItem} item
   * @returns {AvlNode<TItem>}
   */
  _createNode(item) {
    if (this._nodesPool) return this._nodesPool.provide(item);
    return new AvlNode(item);
  }

  /**
   * @private
   * @param {TItem} item
   * @param {AvlNode<TItem> | undefined} node
   * @returns {AvlNode<TItem>}
   */
  _addFromNode(item, node) {
    if (!node) return this._createNode(item);
    const cmp = this._comparer(item, node.value);
    const isToLeftNode = cmp < 0;

    if (cmp == 0) {
      switch (this._duplicationMode) {
        case "keep-all":
          break;
        case "override": {
          node.value = item;
          return node;
        }
        case "ignore": {
          return node;
        }
      }
    }

    if (isToLeftNode) node.left = this._addFromNode(item, node.left);
    else node.right = this._addFromNode(item, node.right);
    node.recalculateHeight();
    node.recalculateSize();
    return this._balance(node);
  }

  /**
   * @param {TItem} item
   */
  add(item) {
    this._root = this._addFromNode(item, this._root);
  }
  //#endregion

  //#region Retrieve
  /**
   * @private
   * @param {AvlNode<TItem>} node
   * @returns {AvlNode<TItem>}
   */
  _findLeftMostFromNode(node) {
    let res = node;
    while (res?.left) res = res.left;
    return res;
  }

  findLeftMostItem() {
    return this._findLeftMostFromNode(this._root)?.value;
  }

  /**
   * @private
   * @param {AvlNode<TItem>} node
   * @returns {AvlNode<TItem>}
   */
  _findRightMostFromNode(node) {
    let res = node;
    while (res?.right) res = res.right;
    return res;
  }

  findRightMostItem() {
    return this._findRightMostFromNode(this._root)?.value;
  }

  /**
   * @private
   * @param {number} order
   * @returns {AvlNode<TItem>}
   */
  _getNodeAt(order) {
    if (!this.size) return undefined;

    order = this._adjustOrder(order);
    let res = this._root;
    let leftSize = res;

    while (true) {
      leftSize = res.left?.size ?? 0;
      if (order === leftSize) return res;
      if (order < leftSize) {
        res = res.left;
      } else {
        res = res.right;
        order -= leftSize + 1;
      }
    }
  }

  /**
   * @param {number} order
   * @returns {TItem}
   */
  getItemAt(order) {
    return this._getNodeAt(order)?.value;
  }

  /**
   * @param {TItem} item
   * @param {number} start
   * @returns {number}
   */
  findFirstOrder(item, start = 0) {
    if (!this.size) return -1;
    start = this._adjustOrder(start);

    let node = this._root;
    let order = node.left?.size ?? 0;
    let res = -1;

    while (node) {
      if (order < start) {
        order = this._calculateRightNodeOrder(node, order);
        node = node.right;
      } else {
        let cmp = this._comparer(item, node.value);
        if (cmp === 0) res = order;
        if (cmp <= 0) {
          order = this._calculateLeftNodeOrder(node, order);
          node = node?.left;
        } else {
          order = this._calculateRightNodeOrder(node, order);
          node = node.right;
        }
      }
    }

    return res;
  }

  /**
   * @param {TItem} item
   * @param {number} end
   * @returns {number}
   */
  findLastOrder(item, end = -1) {
    if (!this.size) return -1;
    end = this._adjustOrder(end);

    let node = this._root;
    let order = node.left?.size ?? 0;
    let res = -1;

    while (node) {
      if (order > end) {
        order = this._calculateLeftNodeOrder(node, order);
        node = node.left;
      } else {
        let cmp = this._comparer(item, node.value);
        if (cmp === 0) res = order;
        if (cmp < 0) {
          order = this._calculateLeftNodeOrder(node, order);
          node = node?.left;
        } else {
          order = this._calculateRightNodeOrder(node, order);
          node = node.right;
        }
      }
    }

    return res;
  }

  /**
   * @param {TItem} item
   * @returns {number}
   */
  count(item) {
    let first = this.findFirstOrder(item);
    if (first === -1) return 0;
    let last = this.findLastOrder(item);
    return last - first + 1;
  }

  /**
   * Find the right-est value that can be added to the the left of item
   * @param {TItem} item
   * @returns {TItem | undefined}
   */
  findLeftBound(item) {
    let node = this._root;
    let res = undefined;

    while (node) {
      let cmp = this._comparer(item, node.value);
      if (cmp < 0) node = node.left;
      else {
        res = node.value;
        node = node.right;
      }
    }

    return res;
  }

  /**
   * Find the left-est value that can be added to the the right of item
   * @param {TItem} item
   * @returns {TItem | undefined}
   */
  findRightBound(item) {
    let node = this._root;
    let res = undefined;

    while (node) {
      let cmp = this._comparer(item, node.value);
      if (cmp > 0) node = node.right;
      else {
        res = node.value;
        node = node.left;
      }
    }

    return res;
  }

  /**
   * @private
   * @param {(item: TItem, order: number) => any} fn
   * @param {AvlNode<TItem>} node
   * @param {number} startOrder
   */
  _forLeftToRightNode(fn, node, startOrder) {
    if (!node) return;
    this._forLeftToRightNode(fn, node.left, startOrder);
    fn(node.value, startOrder + (node.left?.size ?? 0));
    this._forLeftToRightNode(
      fn,
      node.right,
      startOrder + (node.left?.size ?? 0) + 1
    );
  }
  /**
   * @param {(item: TItem, order: number) => any} fn
   */
  forLeftToRight(fn) {
    this._forLeftToRightNode(fn, this._root, 0);
  }

  /**
   * @private
   * @param {(item: TItem, order: number) => any} fn
   * @param {AvlNode<TItem>} node
   * @param {number} startOrder
   */
  _forRightToLeftNode(fn, node, startOrder) {
    if (!node) return;
    this._forRightToLeftNode(fn, node.right, startOrder);
    fn(node.value, startOrder - (node.right?.size ?? 0));
    this._forRightToLeftNode(
      fn,
      node.left,
      startOrder - (node.right?.size ?? 0) - 1
    );
  }

  /**
   * @param {(item: TItem, order: number) => any} fn
   */
  forRightToLeft(fn) {
    this._forRightToLeftNode(fn, this._root, this.size - 1);
  }
  //#endregion

  //#region Remove
  /**
   * @private
   * @param {AvlNode} node
   */
  _destroyNode(node) {
    if (this._nodesPool) this._nodesPool.return(node);
    else node.dispose();
  }

  /**
   * @private
   * @param {TItem} item
   * @param {AvlNode<TItem> | undefined} node
   * @returns {AvlNode<TItem>}
   */
  _removeFromNode(item, node) {
    if (!node) return node;

    const cmp = this._comparer(item, node.value);
    if (cmp < 0) node.left = this._removeFromNode(item, node.left);
    else if (cmp > 0) node.right = this._removeFromNode(item, node.right);
    else {
      if (!node.left) {
        let child = node.right;
        this._destroyNode(node);
        return child;
      }
      if (!node.right) {
        let child = node.left;
        this._destroyNode(node);
        return child;
      }

      let leftMostOfRight = this._findLeftMostFromNode(node.right);
      node.value = leftMostOfRight.value;
      node.right = this._removeFromNode(leftMostOfRight.value, node.right);
    }
    node.recalculateHeight();
    node.recalculateSize();
    return this._balance(node);
  }

  /**
   * @param {TItem} item
   */
  remove(item) {
    this._root = this._removeFromNode(item, this._root);
  }

  /**
   * @param {AvlNode} node
   */
  _clearFromNode(node) {
    if (!node) return;
    if (node.left) this._clearFromNode(node.left);
    if (node.right) this._clearFromNode(node.right);
    this._destroyNode(node);
  }

  clear() {
    if (!this._root) return;
    this._clearFromNode(this._root);
    delete this._root;
  }
  //#endregion
}
//#endregion

//#region AVL Nodes Pool
class AvlNodesPool {
  /**
   * @private
   * @type {AvlNode[]}
   */
  _nodes = [];
  /**
   * @private
   * @type {number}
   */
  _top = 0;

  provide(value) {
    if (this._top) {
      let result = this._nodes[--this._top];
      result.value = value;
      result.left = null;
      result.right = null;
      result.size = 1;
      result.height = 1;
      return result;
    }
    return new AvlNode(value);
  }

  /**
   * @param {AvlNode} node
   */
  return(node) {
    if (this._top === this._nodes.length) this._nodes.push(node);
    else this._nodes[this._top] = node;
    this._top++;
  }
}
//#endregion

let pool = new AvlNodesPool();
let avl1 = new AvlTree({
  comparer: (a, b) => b - a,
  duplicateMode: "keep-all",
  nodesPool: pool,
});
let avl2 = new AvlTree({
  comparer: (a, b) => b - a,
  duplicateMode: "keep-all",
  nodesPool: pool,
});
let addTo1 = new Uint8Array(1e5);

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function (nums) {
  let n = nums.length;
  avl1.clear();
  avl2.clear();

  addTo1[0] = 1;
  avl1.add(nums[0]);
  addTo1[1] = 0;
  avl2.add(nums[1]);

  for (let i = 2; i < n; ++i) {
    let b1 = avl1.findLeftBound(nums[i] + 1);
    b1 = b1 == null ? 0 : avl1.findLastOrder(b1) + 1;
    let b2 = avl2.findLeftBound(nums[i] + 1);
    b2 = b2 == null ? 0 : avl2.findLastOrder(b2) + 1;

    addTo1[i] = b1 > b2 || (b1 == b2 && avl1.size <= avl2.size);
    if (addTo1[i]) {
      avl1.add(nums[i]);
    } else {
      avl2.add(nums[i]);
    }
  }

  let res = new Uint32Array(n);
  let l = 0;
  let r = avl1.size;
  for (let i = 0; i < n; ++i) {
    if (addTo1[i]) {
      res[l++] = nums[i];
    } else {
      res[r++] = nums[i];
    }
  }

  return res;
};
