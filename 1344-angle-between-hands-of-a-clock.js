/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
const angleClock = function(hour, minutes) {
  const minutesAngle = minutes * 6;
  const hoursAngle = (hour + minutes / 60) * 30;
  const diff = Math.abs(minutesAngle - hoursAngle);
  return Math.min(diff, 360 - diff);
};
