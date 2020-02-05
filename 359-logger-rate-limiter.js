/**
 * Initialize your data structure here.
 */
const Logger = function() {
  this.m = new Map()
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  if(!this.m.has(message)) {
    this.m.set(message, timestamp)
    return true
  }
  const p = this.m.get(message)
  const res = timestamp - p >= 10 ? true : false
  if(res) {
    this.m.set(message, timestamp)
    return true
  }
  return false
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
