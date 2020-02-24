/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {Robot} robot
 * @return {void}
 */
const cleanRoom = function(robot) {
  const visited = new Set()
  const shift = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ]
  dfs(0, 0, 0)
  function dfs(r, c, dir) {
    visited.add(r + ',' + c)
    robot.clean()
    for (let i = 0; i < 4; i++) {
      const newDir = (dir + i) % 4
      const x = shift[newDir][0] + r
      const y = shift[newDir][1] + c
      if (!visited.has(x + ',' + y) && robot.move()) {
        dfs(x, y, newDir)
        robot.turnRight()
        robot.turnRight()
        robot.move()
        robot.turnRight()
        robot.turnRight()
      }
      robot.turnRight()
    }
  }
}
