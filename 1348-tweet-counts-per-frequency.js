const createNode = val => ({ val, left: null, right: null });
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val, cur = this.root) {
    const node = createNode(val);
    if (!this.root) { this.root = node; return; }
    if (val >= cur.val) {
      !cur.right ? (cur.right = node) : this.insert(val, cur.right);
    } else {
      !cur.left ? (cur.left = node) : this.insert(val, cur.left);
    }
  }
  traversal(low, high, interval, intervals, cur = this.root) {
    if (!cur) return;
    if (cur.val <= high && cur.val >= low) {
      ++intervals[Math.floor((cur.val - low + 1) / interval)];
    }
    cur.val > low && this.traversal(low, high, interval, intervals, cur.left);
    cur.val < high && this.traversal(low, high, interval, intervals, cur.right);
  }
};
class TweetCounts {
  constructor() {
    this.freqInterval = {
      minute: 60,
      hour: 3600,
      day: 86400,
    };
    this.data = new Map();
  }

  recordTweet(name, time) {
    if (this.data.has(name) === false) {
      this.data.set(name, new BinarySearchTree());
    }
    this.data.get(name).insert(time);
  }

  getTweetCountsPerFrequency(freq, name, start, end) {
    const interval = this.freqInterval[freq];
    const ret = new Array(Math.ceil((end - start + 1) / interval)).fill(0);
    this.data.has(name) && this.data.get(name).traversal(start, end, interval, ret);
    return ret;
  }
};

/** 
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */
