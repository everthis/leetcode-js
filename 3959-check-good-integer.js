/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function(n) {
    return ss(n) - s(n) >= 50

    function s(n) {
        let res = 0
        while(n > 0) {
            res += n % 10
            n = Math.floor(n / 10)
        }

        return res
    }
    function ss(n) {
        let res = 0
        while(n > 0) {
            const digit = n % 10
            res += digit * digit
            n = Math.floor(n / 10)
        }

        return res
    }
};
