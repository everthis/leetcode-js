/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
const ParkingSystem = function(big, medium, small) {
  this['3'] = small
  this['2'] = medium
  this['1'] = big
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  this[carType]--
  if(this[carType] < 0) {
    this[carType] = 0
    return false
  }
  return true
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
