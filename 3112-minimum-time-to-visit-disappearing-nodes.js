/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} disappear
 * @return {number[]}
 */
var minimumTime = function(n, edges, disappear) {
    const graph = {}; 
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    for (const [u, v, length] of edges) {
        graph[u].push({ node: v, length });
        graph[v].push({ node: u, length });
    }

    const answer = new Array(n).fill(-1);
    const pq = new MinHeap();
    const visited = new Set(); 

    pq.insert(0, 0); 

    while (!pq.isEmpty()) {
        const [node, distance] = pq.removeMin();

        if (visited.has(node)) continue; 
        visited.add(node);

        answer[node] = distance; 

        for (const { node: adjNode, length } of graph[node]) {
            if (disappear[adjNode] > distance + length && !visited.has(adjNode)) {
                pq.insert(adjNode, distance + length);
            }
        }
    }

    return answer;
};

// Basic MinHeap implementation 
class MinHeap {
    constructor() {
        this.heap = []; 
    }

    insert(node, distance) {
        this.heap.push([node, distance]);
        this.heapifyUp(); 
    }

    removeMin() {
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]]; 
        const min = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index)[1] > this.heap[index][1]) {
            [this.heap[this.parentIndex(index)], this.heap[index]] = [this.heap[index], this.heap[this.parentIndex(index)]];
            index = this.parentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.leftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index)[1] < this.leftChild(index)[1]) {
                smallerChildIndex = this.rightChildIndex(index);
            }

            if (this.heap[index][1] < this.heap[smallerChildIndex][1]) {
                break;
            } else {
                [this.heap[index], this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex], this.heap[index]];
            }
            index = smallerChildIndex;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChildIndex(index) {
        return 2 * index + 1;
    }

    rightChildIndex(index) {
        return 2 * index + 2;
    }

    hasParent(index) {
        return this.parentIndex(index) >= 0;
    }

    hasLeftChild(index) {
        return this.leftChildIndex(index) < this.heap.length;
    }

    hasRightChild(index) {
        return this.rightChildIndex(index) < this.heap.length;
    }

    parent(index) {
        return this.heap[this.parentIndex(index)];
    }

    leftChild(index) {
        return this.heap[this.leftChildIndex(index)];
    }

    rightChild(index) {
        return this.heap[this.rightChildIndex(index)];
    }
}
