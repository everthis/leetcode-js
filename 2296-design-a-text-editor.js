class Node {
  constructor(val) {
    this.val = val
    this.prev = null
    this.next = null
  }
}

var TextEditor = function() {
 this.left = []
 this.right = []
 this.idx = 0
};

/** 
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function(text) {
 for(const ch of text) this.left.push(ch)
};

/** 
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function(k) {
  let res = 0
  while(this.left.length && k) {
    res++
    this.left.pop()
    k--
  }
  return res
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function(k) {
  while(k && this.left.length) {
  const tmp = this.left.pop()
  this.right.push(tmp)
    k--
  }

  return this.left.slice(Math.max(0, this.left.length - 10), this.left.length).join('')
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function(k) {
  while(k && this.right.length) {
  const tmp = this.right.pop()
  this.left.push(tmp)  
    k--
  }

  return this.left.slice(Math.max(0, this.left.length - 10), this.left.length).join('')
};


/** 
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */
