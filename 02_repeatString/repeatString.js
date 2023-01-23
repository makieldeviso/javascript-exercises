const repeatString = function(inputString, repeats) {
    
    let newString = "";

    if (repeats < 0) {
        return "ERROR"
    }

    for (let i = 0; i < repeats; i++) {
        newString += inputString;
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
