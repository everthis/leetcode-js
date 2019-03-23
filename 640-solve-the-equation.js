/**
 * @param {string} equation
 * @return {string}
 */
function solveEquation (equation) {
  const strArr = equation.split('=')
  const leftHash = build(strArr[0])
  const rightHash = build(strArr[1])
  const xnum = leftHash.x - rightHash.x
  const num = rightHash.num - leftHash.num
  if(xnum === 0 && num !== 0) {
     return "No solution"
  } else if(xnum === 0) {
     return "Infinite solutions"
  } else {
     return `x=${num / xnum}`
  }
};

function build(str) {
  let cur = ''
  const map = {
    num:0,
    x:0
  }
  for(let i = 0; i < str.length; i++) {
    if(str[i] === '-' || str[i] === '+') {
      chkCur(cur, map)
      cur = str[i]
    } else {
      cur += str[i]
    }
  }
  if(cur !== '') {
    chkCur(cur, map)
  }
  return map
}
function chkCur(cur, map) {
  let xIdx = cur.indexOf('x')
  if(xIdx === -1) {
    map.num += +cur
  } else {
    map.x += chkX(cur, xIdx)
  }
}
function chkX(str, xIdx) {
  let tmp = str.slice(0,xIdx)
  let num = 0
  if(tmp === '-') {
    num = -1
  } else if(tmp === '' || tmp === '+') {
    num = 1
  } else {
    num = +tmp
  }
  return num
}
