/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
const numMatchingSubseq = function(s, words) {
  const hash = {}
  for(let w of words) {
    if(hash[w[0]] == null) hash[w[0]] = []
    const it = w[Symbol.iterator]()
    hash[w[0]].push( it )
    it.next()
  }
  let res = 0
  for(let ch of s) {
    const advance = hash[ch] || []
    hash[ch] = []
    for(let it of advance) {
      const obj = it.next()
      if(obj.done === false) {
        if(hash[obj.value] == null) hash[obj.value] = []
        hash[obj.value].push(it)
      } else {
        res++
      }
    }
  }

  return res
};

// another

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
const numMatchingSubseq = function(S, words) {
    let res=0;
    for(let i=0;i<words.length;i++){
      let lastIdx=-1,isSub=true
      for(let j=0;j<words[i].length;j++){
        const curAlp=words[i][j]
        const curIdx=S.indexOf(curAlp,lastIdx+1)
        if(curIdx===-1){
          isSub=false;
          break;
        }
        lastIdx=curIdx
      }
      if(isSub)res++
    }
    return res
  };

// another

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
const numMatchingSubseq = function(s, words) {
  const hash = {}
  for(const w of words) {
    const ch = w[0], it = w[Symbol.iterator]()
    if(hash[ch] == null) hash[ch] = []
    hash[ch].push(it)
    it.next()
  }
  let res = 0
  for(const e of s) {
    const arr = hash[e] || []
    hash[e] = []
    for(const it of arr) {
      const { value, done } = it.next()
      if(done) res++
      else {
        if(hash[value] == null) hash[value] = []
        hash[value].push(it)
      }
    }
  }
  
  return res
};
