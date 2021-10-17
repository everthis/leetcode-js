/**
 * @param {number[]} balance
 */
const Bank = function(balance) {
  this.n = balance.length
  balance.unshift(0)
  this.b = balance
  
};

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
  let res = true
  if(account1 > this.n || account1 < 1) return false
  if(account2 > this.n || account2 < 1) return false
  if(this.b[account1]< money) return false
  this.b[account1] -= money
  this.b[account2] += money
  return true
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
  if(account > this.n || account < 1) return false
  this.b[account] += money
  return true
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
  if(account > this.n || account < 1) return false
  if(this.b[account] < money) return false
  this.b[account] -= money
  return true
};

/** 
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
