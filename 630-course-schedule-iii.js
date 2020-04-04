/**
 * @param {number[][]} courses
 * @return {number}
 */
const scheduleCourse = function (courses) {
  courses.sort((c1, c2) => c1[1] - c2[1])
  let count = 0
  let time = 0
  const queue = []
  const inQueue = (val) => {
    let i = 0
    while (i < queue.length && queue[i] > val) i += 1
    queue.splice(i, 0, val)
  }
  for (let i = 0; i < courses.length; i += 1) {
    const [dur, end] = courses[i]
    if (time <= end - dur) {
      count += 1
      time += dur
      inQueue(dur)
    } else if (queue.length && queue[0] > dur) {
      time = time - queue.shift() + dur
      inQueue(dur)
    }
  }
  return count
}
