/**
 * @param {number[]} queries
 * @param {number} intLength
 * @return {number[]}
 */
var kthPalindrome = function(queries, intLength) {
    if (intLength == 1) {
        let res = []
        for (let item of queries) {
            if (item <= 9) res.push(item)
            else res.push(-1)          
        }
        return res      
    }

    let n = Math.floor(intLength / 2)
    let ref = +("1"+"0".repeat(n-1))

    if (intLength % 2 == 0) {
      let res = []
      for (let item of queries) res.push(gen_even(item))
      return res          
    } else {
      let res = []
      for (let item of queries) res.push(gen_odd(item))
      return res
    }

    function gen_even(val) {
        let part = ref + val - 1
        part = '' + part
        if (part.length != n) return -1
        return +(part + part.split('').reverse().join(''))          
    }


    function gen_odd(val) {
        let mod = (val - 1) % 10
        let div = Math.floor((val - 1) / 10)
        let part = ref + div
        mod = '' + mod, part = '' + part
        if (part.length != n) return -1
        return +(part + mod + part.split('').reverse().join(''))          
    }
};
