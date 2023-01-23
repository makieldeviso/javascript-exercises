const removeFromArray = function() {

// put the arguments into args Array
    let args = [...arguments];
    

// take the first argument as base Array
    let baseArr = args[0];
    

// takes the rest of the arguments to another Array
    let restArr = [];
    for (let i = 1; i < args.length; i++ ) {
        restArr.push(args[i]);
    }
    
// counter check baseArr with restArr

    let finalArr = [];

    for (let i = 0; i < baseArr.length; i++) {
        if (restArr.includes(baseArr[i]) === false) {
         finalArr.push(baseArr[i]);
    }
}

return finalArr;

};


// Do not edit below this line
module.exports = removeFromArray;
