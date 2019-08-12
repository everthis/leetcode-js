/**
 * @param {string} date
 * @return {number}
 */

const dayOfYear = function(date) {
  const [year, month, day] = date.split('-').map(s => +s),
    months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    isLeapYear = !(year % 4) && month > 2 && (!!(year % 100) || !(year % 400))
  return months.splice(0, month - 1).reduce((a, b) => a + b, day + +isLeapYear)
}
