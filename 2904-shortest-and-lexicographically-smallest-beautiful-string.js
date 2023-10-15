/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const shortestBeautifulSubstring = function (s, k) {
    let n = s.length;
    let left = 0;
    let right = 0;
    let count = 0;
    let min_length = Infinity;
    let res = "";
    while (right < n) {
        count = updateCount(s[right], count);
        while (count === k) {
            [min_length, res] = updateRes(s, left, right, min_length, res);
            count = updateCount(s[left], count, false);
            left++;
        }
        right++;
    }
    return res;
    
    
    function updateCount(c, count, increment = true) {
        if (c === '1') {
            return increment ? count + 1 : count - 1;
        }
        return count;
    }
    
    function updateRes(s, left, right, min_length, res) {
        if (right - left + 1 < min_length) {
            min_length = right - left + 1;
            res = s.substring(left, left + min_length);
        } else if (right - left + 1 === min_length) {
            // res = Math.min(res, s.substring(left, left + min_length));
           if(s.substring(left, left + min_length) < res) res = s.substring(left, left + min_length)
        }
        return [min_length, res];
    }

}
