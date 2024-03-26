const MOD = 1e9 + 7;
/**
 * @param {number[]} nums
 * @return {number}
 */
const sumCounts = function(nums) {
    let n = nums.length;
    const last_pos = Array(100001).fill(-1);

    const tree = new SegmentTree(n);
    let res = 0;

    for (let j = 0; j < n; j ++) {            
        let st = last_pos[nums[j]] + 1, ed = j;
        tree.AddOne(st, ed);

        res = (res + tree.sqr[0]) % MOD;

        last_pos[nums[j]] = j;
    }
    return res;
};


class SegmentTree {    
    constructor (n) {
        this.n = n
        this.lzy = Array(4*n).fill(0);
        this.sum = Array(4*n).fill(0);
        this.sqr = Array(4*n).fill(0);
    }
    
   update_lzy( l,  r,  i) {
       const {lzy, sum, sqr} = this

        if (l != r) {
            lzy[i*2+1] += lzy[i];
            lzy[i*2+2] += lzy[i];
        }
        let gap = r-l+1;
        let new_sum = sum[i] + lzy[i]*gap;
        let new_sqr = sqr[i] + lzy[i]*sum[i]*2 + lzy[i]*lzy[i]*gap;
        
        sum[i] = new_sum % MOD;
        sqr[i] = new_sqr % MOD;
        lzy[i] = 0;
    }
    
    AddOne ( x,  y,  l = 0,  r = -1,  i = 0) {
       const {lzy, sum, sqr, n} = this
        if (r == -1) r += n;
        this.update_lzy(l, r, i);
        
        if (r < x || l > y) return;
        if (l >= x && r <= y) {
            lzy[i] = 1;
            return this.update_lzy(l, r, i);
        }
        
        let m = (l+r) >> 1;
        this.AddOne (x, y, l, m, i*2+1);
        this.AddOne (x, y, m+1, r, i*2+2);
        
        sum[i] = (sum[i*2+1] + sum[i*2+2]) % MOD;
        sqr[i] = (sqr[i*2+1] + sqr[i*2+2]) % MOD;
    }    
};
