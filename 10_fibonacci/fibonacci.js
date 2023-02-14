const fibonacci = function(number) {
    if (typeof number === "string") {
     return fibonacci(parseInt(number));    
    }
  
    if (number <= 0) {
        return "OOPS";
    }

    let sequence = [1];
    
    for (let i = 0; i < number; i++) {
        if (sequence.length === number) {
            break;
        } else if (sequence.length === 1) {
            sequence.push(sequence[0]);
        } 
        
        if (sequence.length === number) {
            break;
        }
        
        sequence.push(sequence[i + 1] + sequence[i]);
    }
    return sequence[sequence.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
