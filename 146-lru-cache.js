class Node {
  constructor(key, val) {
    this.val = val;
    this.key = key;
    this.next = this.pre = null;
  }
}

const LRUCache = function(capacity) {
  this.capacity = capacity;
  this.count = 0;
  this.start = new Node(-1, -1);
  this.end = new Node(-1, -1);
  this.start.next = this.end;
  this.end.pre = this.start;
  this.map = {};
};

// insert node into the next of the start
const insertAfter = function(start, node) {
  let next = start.next;
  start.next = node;
  node.pre = start;
  node.next = next;
  next.pre = node;
};

const detach = function(node) {
  let pre = node.pre,
    next = node.next;
  pre.next = next;
  next.pre = pre;
  node.next = node.pre = null;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let node = this.map[key];
  if (node != undefined) {
    detach(node);
    insertAfter(this.start, node);
    return node.val;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let node = this.map[key];
  if (!node) {
    if (this.count == this.capacity) {
      // deleting last nodes
      let t = this.end.pre;
      detach(t);
      delete this.map[t.key];
    } else {
      this.count++;
    }
    node = new Node(key, value);
    this.map[key] = node;
    insertAfter(this.start, node);
  } else {
    node.val = value;
    detach(node);
    insertAfter(this.start, node);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// another

/**
 * @param {number} capacity
 */
const LRUCache = function(capacity) {
  this.m = new Map()
  this.limit = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(!this.m.has(key)) return -1
  const v = this.m.get(key)
  this.m.delete(key)
  this.m.set(key, v)
  return v
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(this.m.has(key)) {
    this.m.delete(key)
  } else {
    if(this.m.size >= this.limit) {
      const first = this.m.keys().next().value
      this.m.delete(first)
    }
  }
  this.m.set(key, value)
};
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
