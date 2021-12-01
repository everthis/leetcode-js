/**
 * @param {number} width
 * @param {number} height
 */
const Robot = function(width, height) {
  this.i = 0
  const pos = Array()
  this.len = width + height - 1 + width - 1 + height - 2
  pos.push( [0,0,3] )
  for(let i = 1; i < width; i++) {
    pos.push([i, 0, 0])
  }
  for(let i = 1; i < height; i++) {
    pos.push([width - 1, i, 1])
  }
  for(let i = 1; i < width; i++) {
    pos.push([width - 1 - i, height - 1, 2])
  }
  for(let i = 1; i < height - 1; i++) {
    pos.push([0, height - 1 - i, 3])
  }
  this.pos = pos
};

/** 
 * @param {number} num
 * @return {void}
 */
Robot.prototype.step = function(num) {
  this.i += num
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function() {
  return this.pos[this.i % this.len].slice(0, 2)
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function() {
  const hash = ['East', 'North', 'West', 'South']
  if(this.i === 0) return hash[0]
  else {
    return hash[this.pos[this.i % this.len][2]]
  }
};
