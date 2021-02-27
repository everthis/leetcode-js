/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)
  const m = nums1.length, n = nums2.length
  let low = 0, high = m
  while(low <= high) {
    
    const px = Math.floor((low + high) / 2)
    const py = Math.floor(( m + n + 1 ) / 2) - px
    
    const maxLeft1 = px === 0 ? -Infinity : nums1[px - 1]
    const minRight1 = px === m ? Infinity : nums1[px]
    
    const maxLeft2 = py === 0 ? -Infinity : nums2[py - 1]
    const minRight2 = py === n ? Infinity : nums2[py]
    
    if(maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if((m + n) % 2 === 0) {
        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
      } else {
        return Math.max(maxLeft1, maxLeft2)
      }
    } else if(maxLeft1 > minRight2) {
      high = px - 1        
    } else {
      low = px + 1
    }
    
  }
};

// another

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

const findMedianSortedArrays = function(A, B) {
  let m = A.length,
    n = B.length;

  if (m > n) {
    return findMedianSortedArrays(B, A);
  }

  let imin = 0,
    imax = m,
    i,
    j;
  while (imin <= imax) {
    i = (imin + imax) >> 1;
    j = ((m + n + 1) >> 1) - i;
    if (j > 0 && i < m && B[j - 1] > A[i]) {
      imin = i + 1;
    } else if (i > 0 && j < n && A[i - 1] > B[j]) {
      imax = i - 1;
    } else {
      if (i === 0) {
        num1 = B[j - 1];
      } else if (j === 0) {
        num1 = A[i - 1];
      } else {
        num1 = Math.max(A[i - 1], B[j - 1]);
      }

      if ((m + n) & 1) {
        return num1;
      }

      if (i === m) {
        num2 = B[j];
      } else if (j === n) {
        num2 = A[i];
      } else {
        num2 = Math.min(A[i], B[j]);
      }
      return (num1 + num2) / 2.0;
    }
  }
};

// another

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1)
  }
  const x = nums1.length
  const y = nums2.length

  let low = 0
  let high = x

  while (low <= high) {
    const partX = Math.floor((low + high) / 2)
    const partY = Math.floor((x + y + 1) / 2) - partX

    const maxX = partX === 0 ? Number.NEGATIVE_INFINITY : nums1[partX - 1]
    const maxY = partY === 0 ? Number.NEGATIVE_INFINITY : nums2[partY - 1]

    const minX =
      partX === nums1.length ? Number.POSITIVE_INFINITY : nums1[partX]
    const minY =
      partY === nums2.length ? Number.POSITIVE_INFINITY : nums2[partY]

    if (maxX <= minY && maxY <= minX) {
      const lowMax = Math.max(maxX, maxY)

      if ((x + y) % 2 == 1) {
        return Math.max(maxX, maxY)
      } else {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2
      }
    } else if (maxX < minY) {
      low = partX + 1
    } else {
      high = partX - 1
    }
  }
}


