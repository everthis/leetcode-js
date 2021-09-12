/**
 * @param {number[]} parents
 * @param {number[]} nums
 * @return {number[]}
 */
const smallestMissingValueSubtree = function(parents, nums) {
      let n = parents.length;
      const ans = new Array(n).fill(0);
      const fn = new Array(100010).fill(0);
      const tree = [];
      const nums1 = nums;
      for(let idx=0;idx<n;idx++) {
        tree.push([]);
      }
      for (let idx=1;idx<n;idx++) {
        tree[parents[idx]].push(idx);
      }
      let nodeIdx = 0;
      search(0,0);
      return ans;
  
    function search( root,  rec) {
      let pos = 1;
      for(let next of tree[root]) {
        pos = Math.max(pos, search(next, nodeIdx));
      }
      nodeIdx++;
      fn[nums1[root]] = nodeIdx;
      while(fn[pos]!=0 && fn[pos]>rec && fn[pos]<=nodeIdx) {
        pos++;
      }
      ans[root] = pos;
      return pos;
    }
};

