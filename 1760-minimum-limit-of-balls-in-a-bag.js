/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
const minimumSize = function(nums, maxOperations) {
        let L = 1, R = 10 ** 9;
        while(L < R){
            let M = (L + (R - L) / 2) >> 0, cnt = 0;
            for(let x of nums) cnt += ((x + M - 1) / M - 1) >> 0;
            if(cnt > maxOperations) L = M + 1;
            else R = M;
        }
        return L;
};

