/**
 * Initialize your data structure here.
 */
const TimeMap = function() {
   this.hash = {}
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if(this.hash[key] == null) this.hash[key] = []
  this.hash[key].push([value, timestamp])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  if(this.hash[key] == null) return ''
  const arr = this.hash[key]

  let l = 0, r = arr.length
  while(l < r) {
    const mid = l + ((r - l) >> 1)
    if(arr[mid][1] <= timestamp) {
      l = mid + 1
    } else {
      r = mid
    }
  }

  if(r === 0) return ''
  return arr[r - 1][0]
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
