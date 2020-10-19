const mod = 10 ** 9 + 7;
const Fancy = function () {
  this.seq = [];
  this.mods = [];
};
Fancy.prototype.append = function (val) {
  this.seq.push(val);
};
Fancy.prototype.addAll = function (inc) {
  this.mods.push(["p", inc, this.seq.length]);
};
Fancy.prototype.multAll = function (m) {
  this.mods.push(["m", m, this.seq.length]);
};
Fancy.prototype.getIndex = function (idx) {
  if (idx >= this.seq.length) return -1;
  let x = this.seq[idx];

  for (let i = 0; i < this.mods.length; i++) {
    if (this.mods[i][2] > idx) {
      if ("m" === this.mods[i][0]) {
        x = (x * this.mods[i][1]) % mod;
      } else {
        x = (x + this.mods[i][1]) % mod;
      }
    }
  }
  return x;
};
