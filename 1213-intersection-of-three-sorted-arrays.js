/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
const arraysIntersection = function(arr1, arr2, arr3) {
  const common = [], n1 = arr1.length, n2 = arr2.length, n3 = arr3.length
  let p1 = 0, p2 = 0, p3 = 0
  while(p1 < n1 && p2 < n2) {
    if(arr1[p1] === arr2[p2]) {
      common.push(arr1[p1])
      p1++
      p2++
    } else if(arr1[p1] < arr2[p2]) p1++
    else p2++
  }
  const res = [], nc = common.length
  let pc = 0
  while(pc < nc && p3 < n3) {
    if(common[pc] === arr3[p3]) {
      res.push(arr3[p3])
      pc++
      p3++
    } else if(common[pc] < arr3[p3]) pc++
    else p3++
  }
  
  
  return res
};

// another

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
const arraysIntersection = function(arr1, arr2, arr3) {
  let a=0,b=0,c=0;
  const res = [];
  while(a<arr1.length && b<arr2.length && c<arr3.length) {
    let min = Math.min(arr1[a], Math.min(arr2[b],arr3[c]));
    if(arr1[a] === min && arr2[b] === min && arr3[c] === min) res.push(min);
    if(arr1[a] === min) a++;
    if(arr2[b] === min) b++;
    if(arr3[c] === min) c++;
  }
  return res;
};
