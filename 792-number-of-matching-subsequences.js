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
