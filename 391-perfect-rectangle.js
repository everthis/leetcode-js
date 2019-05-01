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
