/*
 * @lc app=leetcode id=421 lang=javascript
 *
 * [421] Maximum XOR of Two Numbers in an Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaximumXOR = function(nums) {
  let maxResult = 0
  let mask = 0
  /*The maxResult is a record of the largest XOR we got so far. if it's 11100 at i = 2, it means 
    before we reach the last two bits, 11100 is the biggest XOR we have, and we're going to explore
    whether we can get another two '1's and put them into maxResult
    
    This is a greedy part, since we're looking for the largest XOR, we start 
    from the very begining, aka, the 31st postition of bits. */
  for (let i = 31; i >= 0; i--) {
    //The mask will grow like  100..000 , 110..000, 111..000,  then 1111...111
    //for each iteration, we only care about the left parts
    mask = mask | (1 << i)

    let set = new Set()
    for (let num of nums) {
      /* we only care about the left parts, for example, if i = 2, then we have
        {1100, 1000, 0100, 0000} from {1110, 1011, 0111, 0010}*/
      let leftPartOfNum = num & mask
      set.add(leftPartOfNum)
    }

    // if i = 1 and before this iteration, the maxResult we have now is 1100,
    // my wish is the maxResult will grow to 1110, so I will try to find a candidate
    // which can give me the greedyTry;
    let greedyTry = maxResult | (1 << i)

    for (let leftPartOfNum of set) {
      //This is the most tricky part, coming from a fact that if a ^ b = c, then a ^ c = b;
      // now we have the 'c', which is greedyTry, and we have the 'a', which is leftPartOfNum
      // If we hope the formula a ^ b = c to be valid, then we need the b,
      // and to get b, we need a ^ c, if a ^ c exisited in our set, then we're good to go
      let anotherNum = leftPartOfNum ^ greedyTry
      if (set.has(anotherNum)) {
        maxResult = greedyTry
        break
      }
    }

    // If unfortunately, we didn't get the greedyTry, we still have our max,
    // So after this iteration, the max will stay at 1100.
  }
  return maxResult
}
