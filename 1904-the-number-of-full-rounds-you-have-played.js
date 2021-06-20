/**
 * @param {string} startTime
 * @param {string} finishTime
 * @return {number}
 */
const numberOfRounds = function(startTime, finishTime) {
  let start = 60 * parseInt(startTime.slice(0, 2)) + parseInt(startTime.slice(3))
  let finish = 60 * parseInt(finishTime.slice(0, 2)) + parseInt(finishTime.slice(3));
  if (start > finish) finish += 60 * 24; // If `finishTime` is earlier than `startTime`, add 24 hours to `finishTime`.
  return Math.floor(finish / 15) - Math.ceil(start / 15); // floor(finish / 15) - ceil(start / 15)
};
