/**
 * @param {number[]} grades
 * @return {number}
 */
const maximumGroups = function(grades) {
  grades.sort((a, b) => a - b)
  let res = 0
  let pre = 0, preNum = 0, cur = 0, curNum = 0
  const n = grades.length
  for(let i = 0; i < n; i++) {
    cur += grades[i]
    curNum++
    if(cur > pre && curNum > preNum) {
      res++
      pre = cur
      preNum = curNum
      cur = 0
      curNum = 0
    }
  }
  
  
  return res
};
