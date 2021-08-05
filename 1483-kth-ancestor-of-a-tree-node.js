/**
 * @param {number} n
 * @param {number[]} parent
 */
var TreeAncestor = function(n, parent) {
    // initialize
    this.P = Array.from({length: 20}, () => Array(n).fill(-1))
    // 2^0
    for(let i = 0; i < parent.length; i++){
        this.P[0][i] = parent[i];
    }

    // 2^i
    for(let i = 1; i < 20; i++){
        for(let node = 0; node < parent.length; node++){
            let nodep = this.P[i-1][node];
            if(nodep != -1) this.P[i][node] = this.P[i-1][nodep];
        }
    }  
};

/** 
 * @param {number} node 
 * @param {number} k
 * @return {number}
 */
TreeAncestor.prototype.getKthAncestor = function(node, k) {
    for(let i = 0; i < 20; i++){
        if(k & (1 << i)){
            node = this.P[i][node];
            if(node == -1) return -1;
        }
    }
    return node; 
};

/** 
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */
