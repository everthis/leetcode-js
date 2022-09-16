/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var CBTInserter = function(root) {
    this.r = root
};

/** 
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function(val) {
   let q = [this.r]
   
   while(q.length) {
     const tmp = []
     for(let i = 0; i < q.length; i++) {
       const cur = q[i]
       if(cur.left == null) {
         cur.left = new TreeNode(val)
         return cur.val
       } else tmp.push(cur.left)
       if(cur.right == null) {
         cur.right = new TreeNode(val)
         return cur.val
       } else tmp.push(cur.right)
     }
     
     q = tmp
   }
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.r
};

/** 
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
