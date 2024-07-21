/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
  let v = 0
  for(let c of s){
    if(c ==='a' || c ==='e' || c ==='i' || c ==='o'|| c ==='u') v++
  }
  if(v === 0) return false
  else return true
};
