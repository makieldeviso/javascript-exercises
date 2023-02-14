const caesar = function(phrase, shift) {
    
    let phraseArr = phrase.split("");
    console.log(phraseArr);

    let phraseCodeArr = [];
    phraseArr.forEach(char => {
        let charCode = char.charCodeAt() + shift;
        
        if (/[A-Z]/.test(char)) {
                if (charCode > 90 && charCode < 127) {
                    phraseCodeArr.push(String.fromCharCode(charCode - 26));
                } else if(charCode > 127) {
                     phraseCodeArr.push(String.fromCharCode(charCode - (Math.floor((charCode -65)/26)* 26)));
                    
                }else if (charCode < 65) {
                    phraseCodeArr.push(String.fromCharCode(charCode + 26));
                    
                } else {
                    phraseCodeArr.push(String.fromCharCode(charCode));
                }
        } else if (/[a-z]/.test(char)) {
                if (charCode > 122 && charCode < 127) {
                    phraseCodeArr.push(String.fromCharCode(charCode - 26));
                } else if (charCode > 127) {
                    phraseCodeArr.push(String.fromCharCode(charCode - (Math.floor((charCode -97)/26)* 26)));
                } else if (charCode < 97) {
                    phraseCodeArr.push(String.fromCharCode(charCode + 26));
                } else {
                    phraseCodeArr.push(String.fromCharCode(charCode));
                }
        } else {
            phraseCodeArr.push(char);
        }
    })
return phraseCodeArr.join("");
};

// Do not edit below this line
module.exports = caesar;
