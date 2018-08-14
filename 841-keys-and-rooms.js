/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function(rooms) {
  const stack = [];
  const seen = [];
  for (let i = 0; i < rooms.length; i++) {
    seen[i] = false;
  }
  seen[0] = true;
  stack.push(0);
  while (stack.length) {
    let node = stack.pop();
    for (let el of rooms[node]) {
      if (!seen[el]) {
        seen[el] = true;
        stack.push(el);
      }
    }
  }
  for (let el of seen) {
    if (!el) return false;
  }
  return true;
};
