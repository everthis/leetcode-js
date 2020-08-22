/**
 * @param {number[]} A
 * @return {number}
 */
const oddEvenJumps = function (A) {
  // Creates an array with ONLY the indices of the sorted array
  let sorted = A.map((el, idx) => idx).sort((a, b) => A[a] - A[b] || a - b)
  // Create an array of '-1's of the same array length for odd and even jumps
  let oddJumps = new Array(A.length).fill(-1)
  let evenJumps = new Array(A.length).fill(-1)
  // Create an empty stack
  let stack = []
  // Loop the the sorted array of the indices
  for (let i of sorted) {
    // Loops as long the stack is full OR if the index is greater than the the last index of the stack
    while (stack.length && i > stack[stack.length - 1]) {
      // Pops the index from the stack and place and add the 'i' index in sortedJumps
      oddJumps[stack.pop()] = i
    }
    // Pushes the index onto the stack
    stack.push(i)
  }
  // Empty the stack
  stack = []
  // Reverses the sorted index array
  let reverseSorted = sorted.sort((a, b) => A[b] - A[a] || a - b)
  // Does the exact thing but for even jumps
  for (let i of reverseSorted) {
    while (stack.length && i > stack[stack.length - 1]) {
      evenJumps[stack.pop()] = i
    }
    stack.push(i)
  }
  // Starts the count at 0
  let count = 1
  // Creates a boolean array of false elements for even and odd ends
  let oddEnd = new Array(A.length).fill(false)
  let evenEnd = new Array(A.length).fill(false)
  // Switches the end of each array to true
  oddEnd[A.length - 1] = true
  evenEnd[A.length - 1] = true
  // Loops through the array, starting from the 2nd from the right (since we do not need to worry about       the last index)
  for (let i = A.length - 2; i >= 0; --i) {
    // If even jumps does
    if (evenJumps[i] !== -1 && oddEnd[evenJumps[i]]) evenEnd[i] = true
    if (oddJumps[i] !== -1 && evenEnd[oddJumps[i]]) {
      oddEnd[i] = true
      count++
    }
  }
  return count
}
