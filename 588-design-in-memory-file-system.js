const FileSystem = function () {
  this.items = new Map()
}

/**
 * @param {string} path
 * @return {string[]}
 */
FileSystem.prototype.ls = function (path) {
  const paths = path.split('/').filter((p) => !!p.length)
  let curr = this.items
  let last = ''

  for (const p of paths) {
    curr = curr.get(p)
    last = p
  }
  const list = Array.from(curr.keys()).filter((e) => e !== 'content')
  if (curr.has('content')) list.push(last)
  return list.sort()
}

/**
 * @param {string} path
 * @return {void}
 */
FileSystem.prototype.mkdir = function (path) {
  const paths = path.split('/').filter((p) => !!p.length)
  let curr = this.items
  for (const p of paths) {
    if (!curr.has(p)) {
      curr.set(p, new Map())
    }
    curr = curr.get(p)
  }
}

/**
 * @param {string} filePath
 * @param {string} content
 * @return {void}
 */
FileSystem.prototype.addContentToFile = function (filePath, content) {
  const paths = filePath.split('/').filter((p) => !!p.length)
  let curr = this.items
  for (const p of paths) {
    if (!curr.has(p)) {
      curr.set(p, new Map())
    }
    curr = curr.get(p)
  }
  curr.set('content', (curr.get('content') || '') + content)
}

/**
 * @param {string} filePath
 * @return {string}
 */
FileSystem.prototype.readContentFromFile = function (filePath) {
  const paths = filePath.split('/').filter((p) => !!p.length)
  let curr = this.items
  for (const p of paths) {
    curr = curr.get(p)
  }
  return curr.get('content')
}

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */

// another

const FileSystem = function () {
  this.root = new Node()
}

/**
 * @param {string} path
 * @return {string[]}
 */
FileSystem.prototype.ls = function (path) {
  const cur = this.find(path)
  if(cur.content) {
    const arr = path.split('/')
    return [arr[arr.length - 1]]
  }
  return Object.keys(cur.children).sort()
}

/**
 * @param {string} path
 * @return {void}
 */
FileSystem.prototype.mkdir = function (path) {
  this.find(path)
}

/**
 * @param {string} filePath
 * @param {string} content
 * @return {void}
 */
FileSystem.prototype.addContentToFile = function (filePath, content) {
  const cur = this.find(filePath)
  cur.content += content
}

/**
 * @param {string} filePath
 * @return {string}
 */
FileSystem.prototype.readContentFromFile = function (filePath) {
  const cur = this.find(filePath)
  return cur.content
}

FileSystem.prototype.find = function (filePath) {
  if(filePath.length === 1) return this.root
  const arr = filePath.split('/').slice(1)
  let cur = this.root
  for(let e of arr) {
    if (cur.children[e] == null) cur.children[e] = new Node()
    cur = cur.children[e]
  }
  return cur
}

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */

class Node {
  constructor() {
    this.children = {}
    this.content = ''
  }
}

