/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  const res = []
    const hash = {}
    const ks = new Set()
    for(const e of nums) {
        if(hash[e] == null) hash[e] = 0
        hash[e]++
        ks.add(e)
    }
    const keys = Array.from(ks)
    keys.sort((a, b) => a - b)

    while(chk(hash)) {
        for(const k of keys) {
            if(hash[k] > 0) {
                res.push(k)
                hash[k]--
            }
        }
    }

    return res


    function chk(hash) {
        const keys = Object.keys(hash)
        for(const k of keys) {
            if(hash[k] > 0) return true
        }
        return false
    }
};
