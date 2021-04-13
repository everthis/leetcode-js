/**
 * @param {number[][]} events
 * @return {number}
 */
function maxEvents(events) {
  events.sort(([, aEnd], [, bEnd]) => aEnd - bEnd);
  const lastDay = events[events.length - 1][1];
  const segmentTree = new SegmentTree(Array.from({ length: lastDay }, (_, i) => i), Infinity, (a, b) => Math.min(a, b));
  let daysAttended = 0;

  for (const [start, end] of events) {
    // earliest attendable day
    const ead = segmentTree.queryIn(start - 1, end);
    if (ead <= end) {
      daysAttended += 1;
      segmentTree.setAt(ead, Infinity);
    }
  }

  return daysAttended;
}

// https://github.com/axross/complex-data-structures
// new SegmentTree(values, identity, associate)
//     segmentTree.getAt(i)
//     segmentTree.queryIn(from, to)
//     segmentTree.setAt(i, value)
//     segmentTree.length
class SegmentTree{constructor(t,e,s){if(this.valueLength=t.length,this.identity=e,this.associate=s,0===t.length)this.tree=[];else{const h=2**Math.ceil(Math.log2(t.length))*2-1,i=[];for(let s=0;s<=h>>1;++s)i[(h>>1)+s]=s<t.length?t[s]:e;for(let t=(h>>1)-1;t>=0;--t)i[t]=s(i[2*t+1],i[2*t+2]);this.tree=i}}get length(){return this.valueLength}getAt(t){return this.tree[t+(this.tree.length>>1)]}queryIn(t,e){let s=this.identity;const h=[[0,0,1+(this.tree.length>>1)]];for(;h.length>0;){const[i,r,n]=h.pop();r>=t&&n<=e?s=this.associate(s,this.tree[i]):r>=e||n<t||i>this.tree.length>>1||h.push([2*i+1,r,r+n>>1],[2*i+2,r+n>>1,n])}return s}setAt(t,e){const s=t+(this.tree.length>>1);this.tree[s]=e;let h=s-1>>1;for(;h>=0;)this.tree[h]=this.associate(this.tree[2*h+1],this.tree[2*h+2]),h=h-1>>1}}
