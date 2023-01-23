const reverseString = function(inputString) {

    let newString = ""
    for (let i = (inputString.length - 1); i >= 0; i--) {
        newString += inputString[i];

    }

    return newString;


};

// Do not edit below this line
module.exports = reverseString;
