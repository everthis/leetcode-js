/**
 * @param {number[][]} rectangles
 * @return {number}
 */
const interchangeableRectangles = function(rectangles) {
    const count = new Map()

    for (const [w, h] of rectangles) {
      count.set( w / h, 1 + (count.get( w / h) || 0))
    }

    let res = 0
    for (let c of count.values()) {
      if(c > 1) res += ((c * (c - 1)) / 2)
    }
    return res 
};
