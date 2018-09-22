/**
 * Initialize your data structure here.
 */
const MagicDictionary = function(dict) {
  this.dict = [];
};

/**
 * Build a dictionary through a list of words
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
  this.dict = dict;
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
  return check(word, this.dict);
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = Object.create(MagicDictionary).createNew()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */

function check(str, arr) {
  let el;
  for (let i = 0; i < arr.length; i++) {
    el = arr[i];
    if (el.length === str.length && oneCharDiff(el, str)) {
      return true;
    }
  }

  return false;
}

function oneCharDiff(str1, str2) {
  let diff = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      diff += 1;
    }
  }
  return diff === 1 ? true : false;
}
