/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const isItPossible = function(word1, word2) {
    const map1 = new Array(26).fill(0);
    const map2 = new Array(26).fill(0);
        
    const a = 'a'.charCodeAt(0)
		// store frequency of characters
    for (const ch of word1) map1[ch.charCodeAt(0)-a]++;
    for (const ch of word2) map2[ch.charCodeAt(0)-a]++;

    for (let i = 0; i < 26; i++) {
      if (map1[i] === 0) continue;
      for (let j = 0; j < 26; j++) {
        if (map2[j] === 0) continue;

    // increase freq of char2 and decrease freq of char1 in map1
        map1[j]++;
        map1[i]--;

    // increase freq of char1 and decrease freq of char2 in map2
        map2[i]++;
        map2[j]--;

    // if equal number of unique characters, return true
        if (same(map1, map2)) return true;

    // revert back changes
        map1[j]--;
        map1[i]++;
        map2[i]--;
        map2[j]++;
      }
    }

    return false;
  
  	// check if both maps contain equal number of unique characters
    function same( map1,  map2) {
      let count1 = 0;
      let count2 = 0;
      for (let i = 0; i < 26; i++) {
        if (map1[i] > 0) count1++;
        if (map2[i] > 0) count2++;
      }

      return count1 === count2;
    }
};

