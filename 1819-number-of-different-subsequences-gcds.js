/**
 * @param {number[]} nums
 * @return {number}
 */
const countDifferentSubsequenceGCDs = function(nums) {
    const MAX = 2e5 + 1;
     const cnt = Array(MAX).fill(0)
    for (let x of nums) cnt[x] = true;
    let ret = 0;
    for (let x=1; x<MAX; x++) {
        let g = 0;
        for (let y=x; y<MAX; y+=x) {
            if (cnt[y]) g = gcd(g, y);
        }
        if (g == x) ret++;
    }
    return ret;
};

function gcd(x,y){
    if(y === 0) return x
    return gcd(y, x % y)
}


