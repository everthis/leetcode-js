/**
 * @param {string} s
 * @return {number}
 */
const minInsertions = function(s) {
    let res = 0, right = 0;
    for (let i = 0; i < s.length; ++i) {
        if (s.charAt(i) == '(') {
            if (right % 2 > 0) {
                right--;
                res++;
            }
            right += 2;
        } else {
            right--;
            if (right < 0) {
                right += 2;
                res++;
            }
        }
    }
    return right + res;
};
