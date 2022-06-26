class Encrypter {
  constructor(keys, values, dictionary) {
    this.mapKeyToValue = {};
    this.mapCount = {};
    const n = keys.length;

    for (let i = 0; i < n; i++) {
      const key = keys[i];
      const value = values[i];
      this.mapKeyToValue[key] = value;
    }

    for (const dict of dictionary) {
      const encrypted = this.encrypt(dict);
      this.mapCount[encrypted] = (this.mapCount[encrypted] || 0) + 1;
    }
  }

  encrypt(word1) {
    let res = '';
    for (const char of word1) {
      res += this.mapKeyToValue[char];
    }
    return res;
  }

  decrypt(word2) {
    return this.mapCount[word2] || 0;
  }
}
