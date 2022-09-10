/**
 * @param {number[]} arr
 * @param {number} m
 * @return {number}
 */
const findLatestStep = function(arr, m) {
    const uF = new UnionFind(arr);
    const mRecords = new Set(); // This contains parents whose rank is m 
    const visited = new Set();
    let res = -1;

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        visited.add(val);
        
        if (visited.has(val - 1)) {
            let parent1 = uF.find(val);
            let parent2 = uF.find(val - 1);
			    // Since merging, the rank for val - 1 & val has changed,
          // they are no longer m. Hence removed them from set.
            mRecords.delete(parent1);  
            mRecords.delete(parent2);
            uF.union(val, val - 1);
        }
        
        if (visited.has(val + 1)) {
            let parent1 = uF.find(val);
            let parent2 = uF.find(val + 1);
            mRecords.delete(parent1);
            mRecords.delete(parent2);
            uF.union(val, val + 1);
        }
        
        let parent = uF.find(val);
        if (uF.ranks.get(parent) === m) mRecords.add(parent);
        if (mRecords.size > 0) res = i + 1;  
    }
    
    return res;  
};

class UnionFind {
    constructor(arr) {
        [this.parents, this.ranks] = this.initialise(arr);
    }
    
    initialise(arr) {
        const parents = new Map();
        const ranks = new Map();
        arr.forEach(val => {
            parents.set(val, val);
            ranks.set(val, 1);
        })
        
        return [parents, ranks];
    }
    
    find(val) {
        if (this.parents.get(val) === val) return val;
        this.parents.set(val, this.find(this.parents.get(val)));
        return this.parents.get(val);
    }
    
    union(m, n) {
        const rootM = this.find(m);
        const rootN = this.find(n);
        
        if (rootM === rootN) return;
        if (rootM > rootN) {
            this.updateParent(rootN, rootM);
        } else {
            this.updateParent(rootM, rootN);
        }
    }
    
    updateParent(child, parent) {
        this.ranks.set(parent, this.ranks.get(parent) + this.ranks.get(child));
        this.parents.set(child, parent);
    }
}
