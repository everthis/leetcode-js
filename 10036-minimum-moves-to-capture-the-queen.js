/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {number} e
 * @param {number} f
 * @return {number}
 */
var minMovesToCaptureTheQueen = function(a, b, c, d, e, f) {
  if(rook() || bishop()) return 1
  
  return 2
  
  function rook() {
    if(a === e) {
      const min = Math.min(b,f), max = Math.max(b,f)
      if(c !== a) return true
      else if(d < min || d > max) return true
      else return false
    }
    if(b === f) {
      const min = Math.min(a,e), max = Math.max(a,e)
      if(d !== b) return true
      else if(c < min || c > max) return true
      else return false
    }
    
    return false
  }
  function bishop() {
    // c,d,e,f

    const dirs = [[-1, -1], [-1, 1], [1, -1], [1, 1]]
    const visited = new Set()
    const target = `${e},${f}`
    const key = (x, y) => `${x},${y}`
    
    const ss = new Set()
    // top-left
    let x = c, y = d
    let dd = dirs[0]
    while(x + dd[0]>= 1 && x + dd[0]<= 8 && y+ dd[1] >= 1 && y+dd[1] <= 8  && (!(x + dd[0] === a && y +dd[1] === b))) {
      ss.add(key(x +dd[0], y +dd[1]))
      x += dd[0]
      y += dd[1]
    }
    
    // top-right
    x = c, y = d
     dd = dirs[1]
    while(x + dd[0]>= 1 && x + dd[0]<= 8 && y+ dd[1] >= 1 && y+dd[1] <= 8  && (!(x + dd[0] === a && y +dd[1] === b))) {
      ss.add(key(x +dd[0], y +dd[1]))
            x += dd[0]
      y += dd[1]
    }
    
    // bottom-left
    x = c, y = d
     dd = dirs[2]
    while(x + dd[0]>= 1 && x + dd[0]<= 8 && y+ dd[1] >= 1 && y+dd[1] <= 8  && (!(x + dd[0] === a && y +dd[1] === b))) {
      ss.add(key(x +dd[0], y +dd[1]))
            x += dd[0]
      y += dd[1]
    }
    
    // bottom-right
    x = c, y = d
     dd = dirs[3]
    while(x + dd[0]>= 1 && x + dd[0]<= 8 && y+ dd[1] >= 1 && y+dd[1] <= 8  && (!(x + dd[0] === a && y +dd[1] === b))) {
      ss.add(key(x +dd[0], y +dd[1]))
            x += dd[0]
      y += dd[1]
    }
    if(ss.has(target)) return true
    
    
    return false
  }
};
