/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOrAfterOperations = function(nums, k) {
  let n = nums.length; //length of the array
  let res = 0; //this will contain the 'or' of all final elements of array

  //Iterating from MSB to LSB
  for (let j = 30; j >= 0; j--) 
  {
      let cnt = 0; //count of elements which have 0 at jth bit

      //we will do & of all elements and store it here in 'cur' variable
      let cur = (1 << 30) - 1; //this is basically all last 30 bits set to 1

      let target = res | ((1 << j) - 1); //jth bit is set 0 here, and bits from 0 to (j-1)th index are set to 1

      for (let x of nums) 
      {
          cur &= x;
          if ((cur | target) == target) 
          {
              cnt++;
              cur = (1 << 30) - 1;
          }
      }

      //we have to keep the jth bit if (n-cnt) is greater than k otherwise we can remove jth bit in less than or equal to k operations
      if (n - cnt > k) 
      {
          res |= (1 << j);
      }
  }
  return res;  
};


// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOrAfterOperations = function(nums, k) {
  const n = nums.length;
  let ans = 0;

  for (let j = 30; j >= 0; j--) {
    let cnt = 0;
    let cur = (1 << 30) - 1;
    let target = ans | ((1 << j) - 1);

    for (let i = 0; i < n; i++) {
      cur &= nums[i];
      if ((cur | target) === target) {
        cnt++;
        cur = (1 << 30) - 1;
      }
    }

    if (n - cnt > k) {
      ans |= (1 << j);
    }
  }

  return ans;
};
