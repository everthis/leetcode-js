/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
const minMovesToSeat = function(seats, students) {
  let res = 0
  seats.sort((a, b) => a - b)
  students.sort((a, b) => a - b)
  
  for(let i = 0; i < students.length; i++) {
    res += Math.abs(seats[i] - students[i])
  }
  
  return res
};
