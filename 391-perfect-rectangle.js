/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
const isRectangleCover = function(rectangles) {
  let tls = new Set()
  let trs = new Set()
  let bls = new Set()
  let brs = new Set()
  let corner = (x, y) => `${x} ${y}`
  for (let [l, b, r, t] of rectangles) {
    let tl = corner(t, l)
    let tr = corner(t, r)
    let bl = corner(b, l)
    let br = corner(b, r)
    if (tls.has(tl) || trs.has(tr) || bls.has(bl) || brs.has(br)) return false
    if (!bls.delete(tl) && !trs.delete(tl)) tls.add(tl)
    if (!brs.delete(tr) && !tls.delete(tr)) trs.add(tr)
    if (!brs.delete(bl) && !tls.delete(bl)) bls.add(bl)
    if (!bls.delete(br) && !trs.delete(br)) brs.add(br)
  }
  return tls.size === 1 && trs.size === 1 && bls.size === 1 && brs.size === 1
}

// another

/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
  const n =  rectangles.length
  const rects = rectangles, set = new Set()
  let area = 0
  const p = (x, y) => `${x},${y}`
  let xmin = Infinity, xmax = -Infinity, ymin = Infinity, ymax = -Infinity
  for(const [x,y,a,b] of rects) {
    xmin = Math.min(xmin, x)
    xmax = Math.max(xmax, a)
    ymin = Math.min(ymin, y)
    ymax = Math.max(ymax, b)
    area += (a - x) * (b - y)
    const p0 = p(x,y), p1 = p(a,b),p2=p(x,b),p3=p(a,y)
    if(set.has(p0)) set.delete(p0)
    else set.add(p0)
    if(set.has(p1)) set.delete(p1)
    else set.add(p1)
    if(set.has(p2)) set.delete(p2)
    else set.add(p2)
    if(set.has(p3)) set.delete(p3)
    else set.add(p3)
  }
  if(set.size !== 4 || !set.has(p(xmin, ymin)) || !set.has(p(xmax, ymax)) || !set.has(p(xmin, ymax)) || !set.has(p(xmax, ymin)) ) return false
  return area === (xmax - xmin) * (ymax - ymin)
};
