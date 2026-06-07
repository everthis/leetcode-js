/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var maximumSum = function(nums, m, l, r) {
    const n = nums.length
    const pref = Array(n + 1).fill(0)
    for(let i = 1; i <= n; i++) pref[i] = pref[i - 1] + nums[i - 1]
    let maxi = -1e18
    let dq = new Dq()

    for(let i = l; i <= n; i++) {
        let p = i - l
        while(!dq.isEmpty() && pref[dq.last()] >= pref[p]) dq.pop()
        dq.push(p)
        while(!dq.isEmpty() && dq.head() < i - r) dq.shift()
        if(!dq.isEmpty()) {
            maxi = Math.max(maxi, pref[i] - pref[dq.head()])
        }
    }
// console.log(pref, maxi)
    if(maxi <= 0) return maxi
    let dp = Array(n + 1).fill(null).map(() => ({ first: 0, second: 0}))
    let cur = check(0,l,r)
    if(cur.second <= m) return cur.first

    let low = 0
    let high = 1e11
    let best = 0

    while(low <= high) {
        const mid = Math.floor(low + (high - low) / 2)
        const tmp = check(mid, l, r)
        if(tmp.second >= m) {
            best = mid
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    let res = check(best,l,r)

    
    return res.first + best * m


    function check(num,l,r) {
        dp[0] = {first :0, second: 0}
        let q = new Dq()

        for(let i = 1; i <= n; i++) {
            dp[i] = { ...dp[i - 1]}
            let p = i - l

            if(p >= 0) {
                let val = dp[p].first - pref[p]
                let cnt = dp[p].second
                while(!q.isEmpty()) {
                    let b = q.last()
                    let val2 = dp[b].first - pref[b]
                    let cnt2 = dp[b].second
                    if(val > val2 || (val === val2 && cnt >= cnt2)) q.pop()
                    else break
                }
                q.push(p)
            }

            while(!q.isEmpty() && q.head() < i - r) q.shift()
            if(!q.isEmpty()) {
                let best = q.head()
                let sum = pref[i] - num + dp[best].first - pref[best]
                let cnt = dp[best].second + 1 //
                if(sum > dp[i].first || (sum === dp[i].first && cnt > dp[i].second)) {
                    dp[i] = {first: sum, second: cnt}
                }
            }
            
        }
        

        return dp[n]
    }
};

class Dq {
    constructor() {
        this.dummy = new Node()
        this.tail = null
    }
    push(val) {
        const tmp = new Node(val)
        // if(this.cur == null) this.cur = tmp
        if(this.tail) {
            this.tail.next = tmp
            tmp.pre = this.tail
        } else {
            this.dummy.next = tmp
            tmp.pre = this.dummy
        }

        this.tail = tmp
    }
    pop() {
        if(this.tail == null) return
        const pre = this.tail.pre
        pre.next = null
        this.tail = pre
    }
    isEmpty() {
        return this.dummy.next == null
    }
    shift() {
        const head = this.dummy.next
        const hnxt = head.next
        this.dummy.next = hnxt
        if(hnxt) hnxt.pre = this.dummy
        else this.tail = null
        if(head) return head.val
    }
    head() {
        return this.dummy.next ? this.dummy.next.val : -1
    }
    last() {
        return this.tail ? this.tail.val : -1
    }
}

class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.pre = null
    }
}
