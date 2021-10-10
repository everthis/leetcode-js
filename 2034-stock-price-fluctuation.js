const StockPrice = function () {
  this.timeToPrice = new Map()
  this.lastTime = 0
  this.minPrices = new MinPriorityQueue({ priority: (stock) => stock.price })
  this.maxPrices = new MaxPriorityQueue({ priority: (stock) => stock.price })
}

/**
 * @param {number} timestamp
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function (timestamp, price) {
  this.timeToPrice.set(timestamp, price)
  this.lastTime = Math.max(this.lastTime, timestamp)
  this.minPrices.enqueue({ timestamp, price })
  this.maxPrices.enqueue({ timestamp, price })
}

/**
 * @return {number}
 */
StockPrice.prototype.current = function () {
  return this.timeToPrice.get(this.lastTime)
}

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function () {
  while (
    this.maxPrices.front().element.price !==
    this.timeToPrice.get(this.maxPrices.front().element.timestamp)
  ) {
    this.maxPrices.dequeue()
  }

  return this.maxPrices.front().element.price
}

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function () {
  while (
    this.minPrices.front().element.price !==
    this.timeToPrice.get(this.minPrices.front().element.timestamp)
  ) {
    this.minPrices.dequeue()
  }

  return this.minPrices.front().element.price
}

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */
