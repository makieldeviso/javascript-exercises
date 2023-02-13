const palindromes = function (phrase) {
    let letterRegex = /[a-zA-Z]/;

    let filteredLetters = [];
    let phraseBreakDown = phrase.split("");

    phraseBreakDown.forEach(char => {
      if (letterRegex.test(char)) {
        filteredLetters.push(char.toLowerCase())
      };
    });

    let reversed = [];
    filteredLetters.forEach(char => {
      reversed.unshift(char);
    })

  console.log(filteredLetters);
  console.log(reversed);

  let result = true;
    for (let i = 0; i < filteredLetters.length; i++) {
      if (filteredLetters[i] != reversed[i]) {
        result = false;
        break;
      }
        result = true;
    }

  return result;
  
};

// Do not edit below this line
module.exports = palindromes;
