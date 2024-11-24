/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function (moveTime) {
    const a = moveTime
    let m = a.length, n = a.at(0).length

    let pq = new _PriorityQueue((x, y) => {
        if (x.at(0) !== y.at(0)) return x.at(0) - y.at(0)
        if (x.at(2) !== y.at(2)) return x.at(2) - y.at(2)
    })
    pq.push([0, 0, 0, 1])

    let di = new Array(m).fill().map(() => new Array(n).fill(1e15))
    di[0][0] = 0

    while (pq.size()) {
        let fr = pq.top()
        pq.pop()

        let d = fr.at(0), x = fr.at(1), y = fr.at(2), st = fr.at(3)

        if (x == m - 1 && y == n - 1)
            return d

        new Array([-1, 0], [0, -1], [0, 1], [1, 0]).forEach(([dx, dy]) => {
            if (0 <= x + dx && x + dx < m && 0 <= y + dy && y + dy < n)
            {
                let tmp = Math.max(a.at(x + dx).at(y + dy) - d, 0)
                
                if (di.at(x + dx).at(y + dy) > d + tmp + st) {
                    di[x + dx][y + dy] = d + tmp + st
                    pq.push([di.at(x + dx).at(y + dy), x + dx, y + dy, (st === 1 ? 2 : 1)])
                }
            }
        })
    }
}


// Binary Heap
class _PriorityQueue {
    constructor(cmp) {
        this.arr = new Array()
        this.cmp = cmp || ((a, b) => a - b)
    }

    push(x) {
        this.arr.push(x)
        this.heapifyUp()
    }

    heapifyUp() {
        let cId = this.size() - 1,
            pId = this.parentIndex(cId)
        while (cId > 0 && this.cmp(this.arr.at(cId), this.arr.at(pId)) < 0)
        {
            Math.swap(this.arr, cId, pId)
            cId = pId
            pId = this.parentIndex(cId)
        }
    }

    pop() {
        if (this.size() === 0)
            return
        this.arr[0] = this.arr.pop()
        this.heapifyDown()
    }

    heapifyDown() {
        let pId = 0,
            lcId = this.leftChildIndex(pId),
            rcId = this.rightChildIndex(pId)
        while (lcId < this.size())
        {
            let sc = lcId
            if (rcId < this.size() && this.cmp(this.arr.at(rcId), this.arr.at(lcId)) < 0)
                sc = rcId

            if (this.cmp(this.arr.at(pId), this.arr.at(sc)) <= 0)
                return

            Math.swap(this.arr, pId, sc)
            pId = sc
            lcId = this.leftChildIndex(pId)
            rcId = this.rightChildIndex(pId)
        }
    }

    size() { return this.arr.length }
    top() { return this.arr.at(0) }
    parentIndex = (x) => Math.trunc((x - 1) / 2)
    leftChildIndex = (x) => 2 * x + 1
    rightChildIndex = (x) => 2 * x + 2
}

Math.swap = (obj, i, j) => [obj[i], obj[j]] = [obj[j], obj[i]]
