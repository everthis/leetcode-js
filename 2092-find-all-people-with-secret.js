/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
const findAllPeople = function(n, meetings, firstPerson) {
  meetings.sort((a, b) => a[2] - b[2])
  const uf = new UnionFind(n);
  uf.connect(0, firstPerson);
  let ppl = [];
  for (let i = 0, len = meetings.length; i < len; ) {
    ppl = [];
    let time = meetings[i][2];
    while (i < len && meetings[i][2] === time) {
      uf.connect(meetings[i][0], meetings[i][1]);
      ppl.push(meetings[i][0]);
      ppl.push(meetings[i][1]);
      i++
    }
    for (let n of ppl) {
      if (!uf.connected(0, n)) uf.reset(n);
    }
  }
  let ans = [];
  for (let i = 0; i < n; ++i) {
    if (uf.connected(0, i)) ans.push(i);
  }
  return ans;
};

class UnionFind {
  constructor(n) {
    this.arr = Array(n).fill(null)
    this.arr.forEach((e, i, arr) => arr[i] = i)
  }
  connect(a, b) {
    this.arr[this.find(a)] = this.find(this.arr[b])
  }
  find(a) {
    return this.arr[a] === a ? a : (this.arr[a] = this.find(this.arr[a]))
  }
  connected(a, b) {
    return this.find(a) === this.find(b)
  }
  reset(a) {
    this.arr[a] = a
  }
}

// another

/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
const findAllPeople = function(n, meetings, firstPerson) {
  meetings.sort((a, b) => a[2] - b[2])
  const shared = new Set([0, firstPerson])
  
  let start = new Set(), links = {}
  for(let i = 0, len = meetings.length; i < len; i++) {
    const [x,y,t] = meetings[i]
    if(i > 0 && t !== meetings[i - 1][2]) {
      bfs(start, links)
      start = new Set()
      links = {}
    }
    if(shared.has(x)) start.add(x)
    if(shared.has(y)) start.add(y)
    if(links[x] == null) links[x] = []
    if(links[y] == null) links[y] = []
    links[x].push(y)
    links[y].push(x)
  }
  
  bfs(start, links)
  return Array.from(shared)
  
  function bfs(start, links) {
    const visited = new Set()
    while(start.size) {
      const it = start[Symbol.iterator]()
      const cur = it.next().value
      start.delete(cur)
      visited.add(cur)
      shared.add(cur)
      for(let e of (links[cur] || [])) {
        if(!visited.has(e)) start.add(e)
      }
    }
  }
};
