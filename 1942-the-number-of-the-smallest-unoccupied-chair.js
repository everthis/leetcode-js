/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function (times, targetFriend) {
  const [targetArrival] = times[targetFriend]
  const arrivalQueue = times
  const leavingQueue = [...times]
  arrivalQueue.sort((a, b) => a[0] - b[0])
  leavingQueue.sort((a, b) => a[1] - b[1] || a[0] - b[0])
  const chairsByLeaveTime = new Map()
  let chairsCount = 0
  let arriving = 0,
    leaving = 0

  while (arriving < arrivalQueue.length) {
    let chairIdx
    const arrival = arrivalQueue[arriving][0]
    const leave = leavingQueue[leaving][1]
    if (arrival < leave) {
      chairIdx = chairsCount++
    } else {
      let freeChairIdx = leaving
      chairIdx = chairsByLeaveTime.get(leavingQueue[freeChairIdx++][0])
      while (arrival >= leavingQueue[freeChairIdx][1]) {
        const nextChair = chairsByLeaveTime.get(leavingQueue[freeChairIdx][0])
        if (chairIdx > nextChair) {
          ;[leavingQueue[leaving], leavingQueue[freeChairIdx]] = [
            leavingQueue[freeChairIdx],
            leavingQueue[leaving],
          ]
          chairIdx = nextChair
        }
        ++freeChairIdx
      }
      ++leaving
    }
    if (targetArrival === arrival) {
      return chairIdx
    }
    chairsByLeaveTime.set(arrival, chairIdx)
    arriving++
  }
}
