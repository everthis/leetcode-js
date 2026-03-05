/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    const maxd = new Dq(), mind = new Dq()
    const n = nums.length, big = BigInt
    let res = 0
    let r = 0, l = 0

    for(; r < n; r++) {
        while(!maxd.isEmpty() && nums[maxd.last()] <= nums[r]) maxd.pop()
        maxd.push(r)

        while(!mind.isEmpty() && nums[mind.last()] >= nums[r]) mind.pop()
        mind.push(r)

        while(l <= r && (big(r - l + 1) * big(nums[maxd.head()] - nums[mind.head()]) > big(k))) {
            if(!maxd.isEmpty() && maxd.head() === l) maxd.shift()
            if(!mind.isEmpty() && mind.head() === l) mind.shift()
            l++
        }

        res += r - l + 1
    }

    return res
};

class Dq {
    constructor() {
        this.dummy = new Node()
        this.tail = null
    }
    push(val) {
        const tmp = new Node(val)
        if(this.cur == null) this.cur = tmp
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
