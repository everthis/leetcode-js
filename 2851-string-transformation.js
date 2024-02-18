/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {number}
 */
const numberOfWays = function (s, t, k) {
  const n = s.length,
    M = 1e9 + 7
  const pos = kmp(s + s.slice(0, n-1), t)
  const fk = [0, 0]
  calcFK()

  let res = 0
  for (let p of pos) {
    if (p === 0) res = (res + fk[0]) % M
    else res = (res + fk[1]) % M
  }
  return res

  function kmp(s, t) {
    const m = s.length,
      n = t.length
    const pi = new Array(n).fill(0)
    for (let i = 1; i < n; ++i) {
      let j = pi[i - 1]
      while (j > 0 && t.charAt(j) !== t.charAt(i)) j = pi[j - 1]
      if (j === 0 && t.charAt(0) !== t.charAt(i)) pi[i] = 0
      else pi[i] = j + 1
    }
    let j = 0
    const res = []
    for (let i = 0; i < m; ++i) {
      while (j >= n || (j > 0 && s.charAt(i) !== t.charAt(j))) j = pi[j - 1]
      if (s.charAt(i) === t.charAt(j)) j++
      if (j === n) res.push(i - n + 1)
    }
    return res
  }
  
  function calcFK() {
    fk[1] =
      (((powWrap(n - 1, k, M) + BigInt(((k % 2) * 2 - 1)) + BigInt(M)) % BigInt(M)) * powWrap(n, M - 2, M)) % BigInt(M)
    fk[0] = (fk[1] - BigInt(((k % 2) * 2 - 1)) + BigInt(M)) % BigInt(M)
    // console.log(fk)
    fk[1] = Number(fk[1])
    fk[0] = Number(fk[0])
  }
  
  function powWrap(a,b,M) {
    a = BigInt(a)
    b = BigInt(b)
    M = BigInt(M)
    return pow(a,b,M)
  }
  
  function pow(a, b, M) {
    if (b === 0n) return 1n
    if ((b & 1n) === 0n) return pow((a * a) % M, b >> 1n, M)
    return (a * pow((a * a) % M, b >> 1n, M)) % M
  }  
}


// another


class Modulo {
  /**
   * @param {number} modulo
   */
  constructor(modulo) {
    /** @type {number} @readonly */
    this.modulo = modulo;

    /** @private @type {undefined | number} */
    this._phi = undefined;
  }

  /**
   * @returns {number}
   */
  getPhi() {
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
  }

  /**
   * @param {number} a
   * @returns {number}
   */
  getInverse(a) {
    return this.pow(a, this.getPhi() - 1);
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
      if (number > 0 && number < 1)
        number = this.getInverse(Math.round(1 / number));
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
  div(a, b) {
    return this._quickMul(a, this.getInverse(b));
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

const mod = new Modulo(1000000007);

/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {number}
 */
var numberOfWays = function (s, t, k) {
  s += s;
  const BASE = 26;

  const basePows = [1];
  function getBasePow(n) {
    while (n >= basePows.length) {
      basePows.push(mod.mul(basePows[basePows.length - 1], BASE));
    }
    return basePows[n];
  }

  /** @param {string} s */
  function calcHashWord(s, pre = 0) {
    let result = pre;
    for (let i = 0; i < s.length; i++) {
      result = mod.add(
        mod.mul(result, BASE),
        mod.mul(1 + s.charCodeAt(i), s.charCodeAt(i))
      );
    }
    return result;
  }

  const prefixHash = [];
  prefixHash[-1] = 0;

  for (let i = 0; i < s.length; i++) {
    prefixHash.push(calcHashWord(s[i], prefixHash[prefixHash.length - 1]));
  }

  function getHash(l, r) {
    return mod.add(
      prefixHash[r],
      -mod.mul(prefixHash[l - 1], getBasePow(r - l + 1))
    );
  }

  const hashedT = calcHashWord(t, 0);
  let cntOcc = 0;
  let flagFirstMatch = 0;
  if (getHash(0, t.length - 1) === hashedT) {
    cntOcc++;
    flagFirstMatch = 1;
  }

  for (let i = 1; i < t.length; i++) {
    if (getHash(i, i + t.length - 1) === hashedT) cntOcc++;
  }

  if (k == 1) return cntOcc - flagFirstMatch;
  let res = mod.mul(cntOcc, mod.pow(t.length - 1, k));
  res = mod.add(
    res,
    mod.mul(flagFirstMatch * t.length - cntOcc, k % 2 ? -1 : 1)
  );
  res = mod.div(res, t.length);

  return res;
};
