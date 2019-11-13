const StockSpanner = function() {
  this.values = []
}

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  let count = 1
  while (
    this.values.length > 0 &&
    this.values[this.values.length - 1][0] <= price
  ) {
    count += this.values.pop()[1]
  }
  this.values.push([price, count])
  return count
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
