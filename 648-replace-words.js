/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
const replaceWords = function(dict, sentence) {
  dict.sort();
  const unsortedParts = sentence.split(" ");
  const parts = unsortedParts.slice();
  parts.sort();

  let i = (j = 0);
  const rootMap = {};
  while (i < dict.length && j < parts.length) {
    let part = parts[j];
    let root = dict[i];
    // dict is ahead, increase part
    if (root > part) {
      j++;
    } else {
      if (part.startsWith(root)) {
        rootMap[part] = root;
        j++;
      } else {
        i++;
      }
    }
  }
  for (i = 0; i < unsortedParts.length; i++) {
    if (rootMap[unsortedParts[i]]) {
      unsortedParts[i] = rootMap[unsortedParts[i]];
    }
  }
  return unsortedParts.join(" ");
};

console.log(
  replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery")
);
