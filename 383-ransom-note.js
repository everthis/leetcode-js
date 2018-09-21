/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
  const rArr = ransomNote.split("");
  const mArr = magazine.split("");
  let idx;
  for (let i = 0; i < rArr.length; i++) {
    idx = mArr.indexOf(rArr[i]);
    if (idx === -1) {
      return false;
    } else {
      mArr.splice(idx, 1);
    }
  }
  return true;
};
