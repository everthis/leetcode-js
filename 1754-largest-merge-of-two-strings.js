/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function(word1, word2) {
    let merge = "";
    
    while(word1.length && word2.length) {
        if (word1[0] > word2[0]) {
            merge += word1[0];
            word1 = word1.slice(1);
        } else if (word1[0] < word2[0]) {
            merge += word2[0];
            word2 = word2.slice(1);
        } else {
            if (word1 > word2) {
                merge += word1[0];
                word1 = word1.slice(1);
            } else {
                merge += word2[0];
                word2 = word2.slice(1);
            }
        }
    }
    
    if (word1.length) {
        merge += word1;
    } else if (word2.length) {
        merge += word2;
    }
    
    return merge;  
};

// another

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const largestMerge = function(word1, word2) {
  const stack1 = word1.split(''), stack2 = word2.split('')
  const arr = []
  
  while(stack1.length && stack2.length) {
    const c1 = stack1[0], c2 = stack2[0]
    if(c1 > c2) {
      stack1.shift()
      arr.push(c1)
    } else if(c1 < c2) {
      stack2.shift()
      arr.push(c2)
    } else {
      if(stack1.join('') > stack2.join('')) {
        stack1.shift()
        arr.push(c1)
      } else {
        stack2.shift()
          arr.push(c2)
      }
    }
  }
  if(stack1.length) {
    arr.push(...stack1)
  }
  if(stack2.length) {
    arr.push(...stack2)
  } 
  
  return arr.join('')
};
