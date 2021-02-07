/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var minAbsDifference = function(a, b) {
        let n = a.length, m = (n / 2) >> 0, r = n - m;
        let ans = 2e9;
        const {max, min, abs} = Math
        const va = [], vb = [];
        for(let i=0;i<1<<m;++i) {
            let tmp=0;
            for(let j=0;j<m;++j) {
                if(i>>j&1) tmp+=a[j];
            }
            ans=min(ans,abs(tmp-b));
            va.push(tmp);
        }
        // sort(va.begin(), va.end());
        va.sort((a, b) => a - b)
        for(let i=0;i<1<<r;++i) {
            let tmp=0;
            for(let j=0;j<r;++j) {
                if(i>>j&1) tmp+=a[j+m];
            }
            ans=min(ans,abs(tmp-b));
            let k=b-tmp;
            let pos=lower_bound(va, k);
            for(let j=pos-1;j<=pos+1;++j) {
                if(j>=0 && j<va.length) {
                    ans=min(ans, abs(va[j]+tmp-b));
                }
            }
        }
        return ans;
};

function lower_bound(array, arg1, arg2, arg3, arg4) {
    let first;
    let last;
    let value;
    let less;
    if (arg3 === undefined) {
        first = 0;
        last = array.length;
        value = arg1;
        less = arg2;
    } else {
        first = arg1;
        last = arg2;
        value = arg3;
        less = arg4;
    }

    if (less === undefined) {
        less = function (a, b) { return a < b; };
    }

    let len = last - first;
    let middle;
    let step;
    while (len > 0) {
        step = Math.floor(len / 2);
        middle = first + step;
        if (less(array[middle], value, middle)) {
            first = middle;
            first += 1;
            len = len - step - 1;
        } else {
            len = step;
        }
    }
    return first;
};

