/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
const maxHeightOfTriangle = function(red, blue) {
  let blueFirst = 0, redFirst = 0
  let bb = blue, rb = red
  let b = 1, r = 2
  let bl = 0, rl = 0
  while(bb >= b) {
    bl++
    bb -= b
    b += 2
  }
  while(rb >= r && rl < bl) {
    rl++
    rb -= r
    r += 2
  }
  if(bl - rl > 1) bl = rl + 1
  
  blueFirst = bl + rl
  
  bb = blue, rb = red
  b = 2, r = 1
  bl = 0, rl = 0
  while(rb >= r) {
    rl++
    rb -= r
    r += 2
  }
  
  while(bb >= b && bl < rl) {
    bl++
    bb -= b
    b += 2
  }
  if(rl - bl > 1) rl = bl + 1

  redFirst = bl + rl
  
  
  // return blueFirst
  return Math.max(blueFirst, redFirst)
};
