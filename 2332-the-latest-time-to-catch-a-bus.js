/**
 * @param {number[]} buses
 * @param {number[]} passengers
 * @param {number} capacity
 * @return {number}
 */
const latestTimeCatchTheBus = function(buses, passengers, capacity) {
  buses.sort((b1, b2) => b1 - b2)
  passengers.sort((p1, p2) => p1 - p2)
  
  const passengersSet = new Set(passengers)
  
  let j = 0
  let lastBus = []
  for (let i = 0; i < buses.length; i++) {
    let k = j
    let currentBus = []
    while (k - j < capacity && passengers[k] <= buses[i]) {
      currentBus.push(passengers[k])
      k++
    }
    lastBus = currentBus
    j = k
  }
  
  let lastArrival
  if (lastBus.length == capacity) {
    lastArrival = lastBus[capacity - 1]
    while (passengersSet.has(lastArrival)) {
      lastArrival--
    }
  } else {
    lastArrival = buses[buses.length - 1]
    
    while (passengersSet.has(lastArrival)) {
      lastArrival--
    }
  }
  
  
  return lastArrival
};
