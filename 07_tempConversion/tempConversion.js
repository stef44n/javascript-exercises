const ftoc = function(fahr) {

  let cfromf = (fahr - 32) * (5/9)
  let answer = cfromf.toFixed(1)
  let ans = Number(answer)

  return ans;
};

const ctof = function(cel) {

  let ffromc = cel * (9/5) + 32
  let answer = ffromc.toFixed(1)
  let ans = Number(answer)

  return ans;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
