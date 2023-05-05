/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = function(secret, guess) {
  let x = 0, y = 0
  const arr = Array(10).fill(0)
  for(let i = 0; i < guess.length; i++) {
    const ch = guess[i], e = secret[i]
    if(secret[i] === ch) {
      x++
    } else {
      if(arr[+ch] < 0) y++
      if(arr[+e] > 0) y++
      arr[+ch]++
      arr[+e]--      
    }
  }

  return `${x}A${y}B`
};

// another

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = function(secret, guess) {
  let bulls = 0
  let cows = 0
  const h = {}
  for(let i = 0, len = secret.length; i < len; i++) {
    if(secret[i] === guess[i]) {
      bulls++
    } else {
      if(!h.hasOwnProperty(secret[i])) h[secret[i]] = 0
      h[secret[i]]++
    }
  }
  
  for(let i = 0, len = secret.length; i < len; i++) {
    if(secret[i] !== guess[i]) {
      if(h.hasOwnProperty(guess[i]) && h[guess[i]] > 0) {
        cows++
        h[guess[i]]--
      }
    }
  }

  return `${bulls}A${cows}B`
};
