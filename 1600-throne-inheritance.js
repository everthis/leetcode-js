/**
 * @param {string} kingName
 */
const ThroneInheritance = function(kingName) {
  this.king = kingName
  this.m = {}
  this.dead = {}
};

/** 
 * @param {string} parentName 
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function(parentName, childName) {
  if(!this.m[parentName]) this.m[parentName] = []
  this.m[parentName].push(childName)
};

/** 
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function(name) {
  this.dead[name] = 1
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function() {
  const res = []
  this.dfs(res, this.king)
  return res
};
ThroneInheritance.prototype.dfs = function(ans, root) {
  if (!this.dead[root]) {
    ans.push(root);
  }
  if(!this.m[root]) return
  for (let child of this.m[root]) {
    this.dfs(ans, child);
  }
};
/** 
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
