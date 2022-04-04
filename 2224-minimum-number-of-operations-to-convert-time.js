/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
  const s = current.split(':').map(e => +e)
  const t = correct.split(':').map(e => +e)
  let res = 0
  // hour
  if(s[0] < t[0]) res += t[0] - s[0]
  else if(s[0] > t[0]) res += (24 - (s[0] - t[0]))
  
  // min
  let delta = t[1] - s[1]
  if(delta > 0) {
    if(delta >= 15) {
      res += ~~(delta / 15)
      delta %= 15
    }
    if(delta >= 5) {
      res += ~~(delta / 5)
      delta %= 5
    }
    res += delta
  } else if(delta < 0) {
    res--
    delta += 60
    if(delta >= 15) {
      res += ~~(delta / 15)
      delta %= 15
    }
    if(delta >= 5) {
      res += ~~(delta / 5)
      delta %= 5
    }
    res += delta
  }
  
  return res
};
