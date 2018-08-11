/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function(words) {
  const regex = /^[qwertyuiop]*$|^[asdfghjkl]*$|^[zxcvbnm]*$/;
  return words.filter(
    s => (s.toLowerCase().match(regex) === null ? false : true)
  );
};
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
