//////////////////////////////////////////////Template/////////////////////////////////////////////////////////////
function Bisect() {
    return { insort_right, insort_left, bisect_left, bisect_right }
    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_right(a, x, lo = 0, hi = null) { // > upper_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            x < a[mid] ? hi = mid : lo = mid + 1;
        }
        return lo;
    }
    function insort_left(a, x, lo = 0, hi = null) {
        lo = bisect_left(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_left(a, x, lo = 0, hi = null) { // >= lower_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

// counter with {value: array indices (increasing order)}
const counter_value_in_indexA_in = (a_or_s) => { let m = new Map(); let n = a_or_s.length; for (let i = 0; i < n; i++) { if (!m.has(a_or_s[i])) m.set(a_or_s[i], []); m.get(a_or_s[i]).push(i); } return m; };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function(arr) {
  let a = arr
  this.m = counter_value_in_indexA_in(a)
  this.bi = new Bisect();
};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function(left, right, value) {
    let l = left, r =right, x = value, m = this.m, bi = this.bi
    if (!m.has(x)) return 0;
    let a = m.get(x), len = a.length;
    let min = a[0], max = a[len - 1];
    if (l <= min && r >= max) return len; // cover all
    if (r < min || l > max) return 0; // out of bound
    let lbs = bi.bisect_left(a, l); // needs lbs >= l  (lower bound will find first >= l)
    let ubs = bi.bisect_right(a, r); // needs ubs <= r    (upper bound will find first ubs > r, -1 will guarantee <= r)
    ubs--;
    return ubs - lbs + 1;
};

/** 
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */

