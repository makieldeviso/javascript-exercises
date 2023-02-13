const add = function(...inputs) {
  let numbers = [];

  inputs.forEach(input => {
    if (Array.isArray(input)) {
      input.forEach(arrDigit => numbers.push(arrDigit));
    } else if (typeof input === "number") {
      numbers.push(input);
    }
  });

  return numbers.reduce((accumulator, current) => accumulator + current);
};

const subtract = function(...inputs) {
	let numbers = [];

  inputs.forEach(input => {
    if (Array.isArray(input)) {
      input.forEach(arrDigit => numbers.push(arrDigit));
    } else if (typeof input === "number") {
      numbers.push(input);
    }
  });

  return numbers.reduce((accumulator, current) => accumulator - current);
};

const sum = function(...inputs) {
	let numbers = [];

  inputs.forEach(input => {
    if (Array.isArray(input)) {
        if (input.length === 0) {
            numbers.push(0);
        } else {
            input.forEach(arrDigit => numbers.push(arrDigit));
        }
        
    } else if (typeof input === "number") {
      numbers.push(input);
    }
  });

  return numbers.reduce((accumulator, current) => accumulator + current);
};

const multiply = function(...inputs) {
  let numbers = [];

  inputs.forEach(input => {
    if (Array.isArray(input)) {
        if (input.length === 0) {
            numbers.push(0);
        } else {
            input.forEach(arrDigit => numbers.push(arrDigit));
        }
        
    } else if (typeof input === "number") {
      numbers.push(input);
    }
  });

  return numbers.reduce((accumulator, current) => accumulator * current);
};

const power = function(digit1, digit2) {
  return Math.pow(digit1, digit2);
	
};

const factorial = function(digit) {
  if (digit === 0) {
      return 1;
  }
  
  let current = 1;
  for (let i = (digit); i > 0; i--) {
    current *= i;
  }
    return current;
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
