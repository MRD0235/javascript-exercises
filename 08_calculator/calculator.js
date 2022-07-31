const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(numSet) {
  let total = 0
  for (let i = 0; i < numSet.length; i++) {
    total += numSet[i]
  }
  return total
};

const multiply = function(numSet) {
  let total = 1
  for (let i = 0; i < numSet.length; i++) {
    total *= numSet[i]
  }
  return total
};

const power = function(base, exponent) {
	return Math.pow(base, exponent)
};

const factorial = function(number) {
	let total = 1
  for (let i = number; i > 0; i--) {
    total *= i
  }
  return total
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
