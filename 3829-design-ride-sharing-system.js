
var RideSharingSystem = function() {
    this.riders = []
  this.drivers = []
  this.activeRiders = new Set()
};

/** 
 * @param {number} riderId
 * @return {void}
 */
RideSharingSystem.prototype.addRider = function(riderId) {
    this.riders.push(riderId)
  this.activeRiders.add(riderId)
};

/** 
 * @param {number} driverId
 * @return {void}
 */
RideSharingSystem.prototype.addDriver = function(driverId) {
    this.drivers.push(driverId)
};

/**
 * @return {number[]}
 */
RideSharingSystem.prototype.matchDriverWithRider = function() {
    while(this.riders.length > 0 && !this.activeRiders.has(this.riders[0])) {
      this.riders.shift()
    }
  if(this.riders.length === 0 || this.drivers.length === 0) {
    return [-1, -1]
  }
  const matched_driver = this.drivers.shift()
  const matched_rider = this.riders.shift()
  this.activeRiders.delete(matched_rider)
  return [matched_driver, matched_rider]
};

/** 
 * @param {number} riderId
 * @return {void}
 */
RideSharingSystem.prototype.cancelRider = function(riderId) {
    if(this.activeRiders.has(riderId)) {
      this.activeRiders.delete(riderId)
    }
};

/** 
 * Your RideSharingSystem object will be instantiated and called as such:
 * var obj = new RideSharingSystem()
 * obj.addRider(riderId)
 * obj.addDriver(driverId)
 * var param_3 = obj.matchDriverWithRider()
 * obj.cancelRider(riderId)
 */
