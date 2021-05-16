/**
 * @param {string} s
 * @return {number}
 */
const minSwaps = function(s) {
  const valid = chk(s)
  if(valid === -1) return -1
  const [zeroNum, oneNum] = valid
  let res = Infinity
  if(zeroNum === oneNum) {
    // zero start
    let tmpZero = 0
    let cur = '0'
    for(let i = 0; i < s.length; i++) {
      if(i % 2 === 0 && s[i] !== '0') tmpZero++
    }
    
    res = Math.min(tmpZero, res)
    // one start
    let tmpOne = 0
    cur = '1'
    for(let i = 0; i < s.length; i++) {
      if(i % 2 === 0 && s[i] !== '1') tmpOne++
    }
    res = Math.min(tmpOne, res)
  } else if(zeroNum > oneNum) {
    let tmpZero = 0
    let cur = '0'
    for(let i = 0; i < s.length; i++) {
      if(i % 2 === 0 && s[i] !== '0') tmpZero++
    }
    
    res = Math.min(tmpZero, res)     
  } else {
    let tmpOne = 0
    cur = '1'
    for(let i = 0; i < s.length; i++) {
      if(i % 2 === 0 && s[i] !== '1') tmpOne++
    }
    res = Math.min(tmpOne, res)
  }
  return res
};

function chk(str) {
  let oneNum = 0, zeroNum = 0
  for(let ch of str) {
    if(ch === '0') zeroNum++
    else oneNum++
  } 
  return Math.abs(zeroNum - oneNum) <= 1 ? [zeroNum, oneNum] : -1
}

