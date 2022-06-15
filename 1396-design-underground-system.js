
const UndergroundSystem = function() {
  this.h = new Map()
  this.routeMap = new Map()
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.h.set(id, [stationName, t])
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  const [sn, st] = this.h.get(id)
  this.h.delete(id)
  const route = `${sn},${stationName}`
  const duration = t - st
  const [totalTime, totalValue] = this.routeMap.get(route) || ([0, 0])
  this.routeMap.set(route, [totalTime + duration, totalValue + 1])
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  const k = `${startStation},${endStation}`
  const [time, number] = this.routeMap.get(k)
  return time / number
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
