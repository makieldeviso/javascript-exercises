const sumAll = function(firstNum, lastNum) {

if (firstNum < 0 || lastNum < 0) {
    return "ERROR";
} else if (typeof firstNum !== "number" || typeof lastNum !== "number") {
    return "ERROR";
}

// --------------using Arithmetic Progression Formula ---------------

// let numOfDigits = (firstNum + lastNum - 1);
// console.log(numOfDigits)

// let total = (numOfDigits / 2) * (firstNum + lastNum);

// return total;

// -------------- Using manual solution ------------------
let totalCounter = 0;
if (firstNum < lastNum) {
    
    for (let i = firstNum; i <= lastNum; i++) {
        totalCounter += i;
    }

return totalCounter;

} else if (lastNum < firstNum) {

    for (let i = lastNum; i <= firstNum; i++) {
        totalCounter += i;
    }

return totalCounter;
}

};



// Do not edit below this line
module.exports = sumAll;
