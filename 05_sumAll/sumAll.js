const sumAll = function(firstNum, lastNum) {

// using Arithmetic Progression Formula

if (firstNum < 0 || lastNum < 0) {
    return "ERROR";
} else if (typeof firstNum !== "number" || typeof lastNum !== "number") {
    return "ERROR";
}

let numOfDigits = (firstNum + lastNum - 1);
console.log(numOfDigits)

let total = (numOfDigits / 2) * (firstNum + lastNum);

return total;

};


// Do not edit below this line
module.exports = sumAll;
