/**
 * @param {number} n
 * @return {number}
 */
const nextBeautifulNumber = function(n) {
    while (true) {
        ++n;
        if (balance(n)) return n;
    } 
    function balance(n) {
        let cnt = Array(10).fill(0);
        while (n) {
            if (n % 10 == 0) return false; // no 0 allowed
            cnt[n % 10]++;
            n = ~~(n / 10);
        }
        for (let i = 1; i < 10; ++i) {
            if (cnt[i] && cnt[i] !== i) return false;
        }
        return true;
    }
};

