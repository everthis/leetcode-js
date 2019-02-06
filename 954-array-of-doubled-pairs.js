/**
 * @param {number[]} A
 * @return {boolean}
 */
const canReorderDoubled = function(A) {
    const cnt = {}
    for(let val of A) {
        val = Math.abs(val)
        cnt[val] ? cnt[val]++ : cnt[val] = 1
    }
    for(let val in cnt) {
        let sibling = val * 2
        if(val == '0') {
            if(cnt[val] % 2) return false
            cnt[val] = 0 
        } else if(cnt[val] && cnt[sibling]) {
            cnt[sibling] -= cnt[val]
            cnt[val] = 0
        }
    }
    for(let val in cnt)
        if(cnt[val]) return false
    return true
};
