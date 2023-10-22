/**
 * @param {number[]} nums
 * @return {number}
 */
var minGroupsForValidAssignment = function(nums) {
        let mp = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (mp.has(nums[i])) {
                mp.set(nums[i], mp.get(nums[i]) + 1);
            } else {
                mp.set(nums[i], 1);
            }
        }
        
        let maxi = 0;
        let n = nums.length;
        
        let u = new Map();
        for (let i of nums) {
            if (u.has(i)) {
                u.set(i, u.get(i) + 1);
            } else {
                u.set(i, 1);
            }
            maxi = Math.max(maxi, u.get(i));
        }
        
        for (let i = maxi; i >= 1; i--) {
            if (posi(i, u)) {
                let res = 0;
                for (let [curr, c] of u) {
                    let left = c % i;
                    res += Math.floor(c / i);
                    if (left > 0) {
                        res++;
                    }
                }
                return res;
            }
        }
        return -1;
    }
    
    function posi(x, u) {
        for (let [curr, cnt] of u) {
            let left = cnt % x;
            let tt = Math.floor(cnt / x);
            
            if (left < x - 1) {
                let req = (x - 1) - left;
                if (tt >= req) {
                    left = x - 1;
                }
            }
            
            if (left > 0 && left < x - 1) {
                return false;
            }
        }
        return true;
    }
