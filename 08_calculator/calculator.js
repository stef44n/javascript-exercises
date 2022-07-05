const add = function(add1, add2) {
	return add1 + add2;
};

const subtract = function(sub1, sub2) {
	return sub1 - sub2;
};

const sum = function(total) {
  const summed = total.reduce((total, num) => {
    return total + num;
  }, 0);
  return summed;
};

const multiply = function(total) {
  const multiplied = total.reduce((total, num) => {
    return total * num;
  });
  return multiplied;
};

const power = function(pow1, pow2) {
	return pow1**pow2;
};

const factorial = function(num1) {
  let fact = 1;
  if (num1 === 0 || num1 === 1) {
      return 1;
  } else {
      for (let i = 2; i <= num1; i++) 
          fact = fact*i;
          return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
