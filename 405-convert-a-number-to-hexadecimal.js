/**
 * @param {number} num
 * @return {string}
 */
const toHex = function(num) {
    const bin = (num >>> 0).toString(2)
    const arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    const mod = bin.length % 4
    const r = []
    if(mod !== 0 ){
        r.push(arr[ parseInt(bin.slice(0, mod),2) ])
    }
    
    for(let i = mod; i < bin.length; i = i + 4) {
        r.push(arr[ parseInt(bin.slice(i, i+4),2) ])
    }
    return r.join('')
};
