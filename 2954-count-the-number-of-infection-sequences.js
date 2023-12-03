//#region Modulo
class Modulo {
  /**
   * @param {number} modulo
   */
  constructor(modulo) {
    /** @type {number} @readonly */
    this.modulo = modulo;
  }

  /**
   * @param  {...number} numbers
   */
  add(...numbers) {
    let result = 0;
    for (let number of numbers) {
      result = (result + (number % this.modulo)) % this.modulo;
    }

    if (result < 0) result += this.modulo;
    return result;
  }

  /**
   * @private
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  _quickMul(a, b) {
    a = ((a % this.modulo) + this.modulo) % this.modulo;
    b = ((b % this.modulo) + this.modulo) % this.modulo;
    if (a === 0 || b === 0) return 0;
    if (Math.log2(a) + Math.log2(b) < 50) return (a * b) % this.modulo;

    let result = 0;
    while (b) {
      while (b % 2 === 0) {
        a = (a * 2) % this.modulo;
        b /= 2;
      }

      if (b % 2 !== 0) {
        result = (result + a) % this.modulo;
        b--;
      }
    }

    return result;
  }

  /**
   * @param  {...number} numbers
   */
  mul(...numbers) {
    let result = 1;
    for (let number of numbers) {
      result = this._quickMul(result, number);
      if (result === 0) return 0;
    }

    if (result < 0) result += this.modulo;
    return result;
  }

  /**
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  pow(a, b) {
    a = ((a % this.modulo) + this.modulo) % this.modulo;
    if (a === 0) return 0;

    let result = 1;
    while (b) {
      while (b % 2 === 0) {
        a = this._quickMul(a, a);
        b /= 2;
      }

      if (b % 2 !== 0) {
        result = this._quickMul(result, a);
        b--;
      }
    }

    return result;
  }
}
//#endregion

//#region Division
/** @private @type {undefined | number} */
Modulo.prototype._phi = undefined;

/**
 * @returns {number}
 */
Modulo.prototype.getPhi = function () {
  if (this._phi !== undefined) return this._phi;

  let result = this.modulo;
  let temp = this.modulo;
  for (let i = 2; i <= Math.sqrt(temp); i++) {
    if (temp % i === 0) {
      result /= i;
      result *= i - 1;
    }
    while (temp % i === 0) temp /= i;
  }
  if (temp > 1) {
    result /= temp;
    result *= temp - 1;
  }

  this._phi = result;
  return result;
};

/**
 * @param {number} a
 * @returns {number}
 */
Modulo.prototype.getInverse = function (a) {
  return this.pow(a, this.getPhi() - 1);
};

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
Modulo.prototype.div = function (a, b) {
  return this._quickMul(a, this.getInverse(b));
};
//#endregion

let mod = new Modulo(1000000007);

let FACTS = new Uint32Array(100001);
FACTS[0] = 1;
for (let i = 1; i <= 1e5; ++i) FACTS[i] = mod.mul(FACTS[i - 1], i);

/**
 * @param {number} n
 * @param {number[]} sick
 * @return {number}
 */
var numberOfSequence = function (n, sick) {
  let m = sick.length;
  let e = FACTS[n - m];
  let d = mod.mul(FACTS[sick[0]], FACTS[n - 1 - sick[m - 1]]);

  for (let i = 1; i < m; ++i) {
    let dis = sick[i] - sick[i - 1] - 1;
    if (dis <= 1) continue;
    e = mod.mul(e, mod.pow(2, dis - 1));
    d = mod.mul(d, FACTS[dis]);
  }

  return mod.div(e, d);
};
