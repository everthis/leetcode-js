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
