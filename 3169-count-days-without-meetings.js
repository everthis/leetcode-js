/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
  let uniqueMeetings = Array.from(new Set(meetings.map(JSON.stringify))).map(
    JSON.parse,
  )
  uniqueMeetings.sort((a, b) => a[0] - b[0])
  let mergedMeetings = [uniqueMeetings[0]]
  for (let i = 1; i < uniqueMeetings.length; i++) {
    if (uniqueMeetings[i][0] <= mergedMeetings[mergedMeetings.length - 1][1]) {
      mergedMeetings[mergedMeetings.length - 1][1] = Math.max(
        mergedMeetings[mergedMeetings.length - 1][1],
        uniqueMeetings[i][1],
      )
    } else {
      mergedMeetings.push(uniqueMeetings[i])
    }
  }
  let totalWork = mergedMeetings.reduce(
    (acc, meeting) => acc + (meeting[1] - meeting[0] + 1),
    0,
  )
  return days - totalWork
}
