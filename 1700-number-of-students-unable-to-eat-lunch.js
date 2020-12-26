/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
const countStudents = function(students, sandwiches) {
  const n = students.length
  let res = n
  while(helper(students, sandwiches)) {
      const len = students.length
      for(let i = 0; i < len; i++) {
        if (students[0] === sandwiches[0]) {
          students.shift()
          sandwiches.shift()
          res--
        } else {
          const tmp = students[0]
          students.shift()
          students.push(tmp)
        }
      }
  }
  return res
};

function helper(stu, san) {
  const n = stu.length
  let res = false
  for(let i = 0; i < n; i++) {
    if (stu[i] === san[0]) {
      return true
    }
  }
  return res
}
