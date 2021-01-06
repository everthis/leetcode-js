/**
 * @param {string[]} A
 * @return {number}
 */
const minDeletionSize = function (A) {
  let res = 0,
    i,
    j //n: 有多少个字符串，对应i.  m:每个字符串的长度,对应j
  const n = A.length,
    m = A[0].length,
    sorted = new Array(n - 1).fill(false)
  for (j = 0; j < m; ++j) {
    //从第一个字符到最后一个字符
    for (i = 0; i < n - 1; ++i) {
      //i从第一个字到最后一个字
      if (!sorted[i] && A[i].charAt(j) > A[i + 1].charAt(j)) {
        res++
        break
      }
    }
    if (i < n - 1) continue

    //假设输入是["xgag","xfba","yfac"]
    //那么第一轮j=0,比较第一列: x=x<y，合理，所以此时res=0，然后运行了下面的循环， 可以使得sorted[xfb] = true;
    //然后第二轮j=1,第二列g>f,进入if条件语句，所以res = 1, break
    //然后第三轮j=2,a<b>a,这里b虽然>a，但是由于sorted[xfb] = true，所以不会进入到上面的循环体，然后sorted[xga] = true
    //然后第四轮j=3,这一轮已经不再重要，因为通过前面几轮 sorted[0] = true， sorted[1] = true, 这意味着已经实现了排序，所以res最终结果就是1

    for (
      i = 0;
      i < n - 1;
      ++i //这一段代码结合最外面的循环可以用作比较string大小的通用代码
    )
      if (A[i].charAt(j) < A[i + 1].charAt(j)) sorted[i] = true
  }
  return res
}

// another

/**
 * @param {string[]} A
 * @return {number}
 */
const minDeletionSize = function (A) {
  const set = new Set()
  const m = A.length
  let res = 0
  if(m === 0) return 0
  const n = A[0].length
  for(j = 0; j < n; j++) {
    if(set.size === m - 1) return res
    for(i = 0; i < m - 1; i++) {
      if(!set.has(i) && A[i][j] > A[i + 1][j]) {
        res++
        break
      }
    }
    if(i < m - 1) continue
    for(i = 0; i < m - 1; i++) {
      if(A[i][j] < A[i + 1][j]) set.add(i)
    }
  }
  
  return res
}

