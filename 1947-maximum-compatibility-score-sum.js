/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
const maxCompatibilitySum = function(students, mentors) {
  const obj = { res: 0 }, hash = {}
  for(let i = 0, n = students.length; i < n; i++) {
    bt(students, mentors, 0, 0, obj, hash)
  }
  return obj.res
};

function bt(stu, men, i, score, obj, hash) {

  if(i === stu.length) {
    if(score > obj.res) {
      obj.res = score
      // console.log(hash)
    }
    return
  }
  
  for(let j = 0; j < men.length; j++) {
    const k = `${j}`
    if(hash[k] === 1) continue
    hash[k] = 1
    bt(stu, men, i + 1, score + calc(stu[i], men[j]), obj, hash)
    delete hash[k]
  }
}

function calc(a1, a2) {
  const n = a1.length
  let res = 0
  for(let i = 0; i < n; i++) {
    if(a1[i] === a2[i]) res++
  }
  return res
}
