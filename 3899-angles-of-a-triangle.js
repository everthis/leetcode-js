/**
 * @param {number[]} sides
 * @return {number[]}
 */
var internalAngles = function(sides) {
    const [a,b,c] = sides
    if(a +b <=c || a+c<=b || b+c<= a) return []

    const val = 180 / Math.PI
    const aa = Math.acos((b*b + c*c - a*a) / (2*b*c)) * val
    const bb = Math.acos((a*a + c*c - b*b) / (2*a*c)) * val
    const cc = 180 - aa - bb
    
    const res = [aa, bb, cc]
    res.sort((a, b) => a - b)


    return res
};
