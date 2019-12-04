/**
 * Initialize your data structure here.
 */
const HitCounter = function() {
  this.times = []
  this.hits = []
}

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
  const idx = timestamp % 300
  const times = this.times
  const hits = this.hits
  if (times[idx] !== timestamp) {
    times[idx] = timestamp
    hits[idx] = 1
  } else {
    hits[idx]++
  }
}

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
  let total = 0
  const times = this.times
  const hits = this.hits
  for (let i = 0; i < 300; i++) {
    if (timestamp - times[i] < 300) {
      total += hits[i]
    }
  }
  return total
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
