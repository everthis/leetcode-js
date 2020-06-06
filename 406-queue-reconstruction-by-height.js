/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = function (people) {
  const h = 0
  const k = 1
  people.sort((a, b) => (a[h] == b[h] ? a[k] - b[k] : b[h] - a[h]))
  let queue = []
  for (let person of people) {
    queue.splice(person[k], 0, person)
  }
  return queue
}

// another

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = function(people) {
  if (!people) return [];
  const peopledct = {};
  let height = [];
  const res = [];
  people.forEach((el, idx) => {
    if (peopledct.hasOwnProperty(el[0])) {
      peopledct[el[0]].push([el[1], idx]);
    } else {
      peopledct[el[0]] = [[el[1], idx]];
      height.push(el[0]);
    }
  });
  height = height.sort((a, b) => b - a);

  for (let i = 0; i < height.length; i++) {
    peopledct[height[i]] = peopledct[height[i]].sort((a, b) => a[0] - b[0]);
    for (el of peopledct[height[i]]) {
      res.splice(el[0], 0, people[el[1]]);
    }
  }
  return res;
};

console.log(reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]));
