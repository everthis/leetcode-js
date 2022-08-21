/**
 * @param {string} num
 * @return {string}
 */
const largestPalindromic = function(num) {
       let cnt = new Array(10).fill(0);
        for (let i = 0; i < num.length; i++) {
            let c = +num[i];
            cnt[c]++;
        }

        let list = [];
        for (let i = 9; i >= 0; i--) {
            if (i == 0 && list.length == 0) {
                break;
            }
            while (cnt[i] >= 2) {
                list.push(i);
                cnt[i] -= 2;
            }
        }
        let sb = '';
        for (let n of list) {
            sb += n;
        }
        for (let i = 9; i >= 0; i--) {
            if (cnt[i] > 0) {
                sb += i;
                break;
            }
        }
        for (let i = list.length - 1; i >= 0; i--) {
            sb += list[i];
        }
        return sb;
};
