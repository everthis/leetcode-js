/**

Given a list of scores of different students, return the average score
of each student's top five scores in the order of each student's id.

Each entry items[i] has items[i][0] the student's id, and items[i][1]
the student's score.  The average score is calculated using integer division.

Example 1:

Input: [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
Output: [[1,87],[2,88]]
Explanation: 
The average of the student with id = 1 is 87.
The average of the student with id = 2 is 88.6. But with integer division
their average converts to 88.

Note:

1 <= items.length <= 1000
items[i].length == 2
The IDs of the students is between 1 to 1000
The score of the students is between 1 to 100
For each student, there are at least 5 scores

*/

/**
 * @param {number[][]} items
 * @return {number[][]}
 */
const highFive = function(items) {
  const m = {}
  for(let el of items) {
    const key = '' + el[0]
    if(!m.hasOwnProperty(key)) m[key] = []
    add(m[key], el[1])
  }
  const res = []
  Object.entries(m).forEach(el => {
    res.push([+el[0], div(el[1])])
  })
  return res.sort((a, b) => a[0] - b[0])
};

function div(arr) {
  let sum = 0
  arr.forEach(el => sum += el)
  return sum / 5 >> 0
}

function add(arr, val) {
  if(arr.length < 5) arr.push(val)
  else {
    let min = Number.MAX_VALUE
    let idx = -1
    for(let i = 0, len = arr.length; i < len; i++) {
      if(arr[i] < min) {
        min = arr[i]
        idx = i
      }
    }
    if(val > min && idx !== -1) {
      arr.splice(idx, 1, val)
    }
  }
}
