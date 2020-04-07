/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     // It's the unique id of each node
 *     // unique id of this employee
 *     this.id = id;
 *     // the importance value of this employee
 *     this.importance = importance;
 *     // the id of direct subordinates
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
const GetImportance = function (employees, id) {
  const map = {}
  employees.forEach((employee) => {
    map[employee.id] = employee
  })
  const s = [id]
  let importance = 0
  while (s.length) {
    let current = map[s.pop()]
    importance += current.importance
    if (current.subordinates.length) {
      s.push(...current.subordinates.reverse())
    }
  }
  return importance
}
