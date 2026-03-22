/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var minRemovals = function(nums, target) {
    let cur_xor = 0
    let avail_nums = Array.from(new Set(nums))
    let queue = new Dq()
    queue.push([0,0])
    let visited_states = new Set([0])

    for(const e of nums) cur_xor ^= e

    let tar_to_remv = cur_xor ^ target

    if(tar_to_remv === 0) return 0

    if(avail_nums.includes(tar_to_remv)) return 1

    while(!queue.isEmpty()) {
        let [cur_val, steps] = queue.shift()

        for(let num of avail_nums) {
            let next_val = cur_val ^ num

            if(next_val === tar_to_remv) {
                return steps + 1
            }
            if(!visited_states.has(next_val)) {
                visited_states.add(next_val)
                queue.push([next_val, steps + 1])
            }
        }
    }


    return -1
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
