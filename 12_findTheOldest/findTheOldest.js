const findTheOldest = function(people) {

    let sortedPeople =  people.sort((person, nextPerson) => {

        let personAge;
        let nextPersonAge;

        if (person["yearOfDeath"] === undefined) {
            personAge = new Date().getFullYear() - person["yearOfBirth"];  
        } else {
            personAge = person["yearOfDeath"] - person["yearOfBirth"];
        }
        
        if (nextPerson["yearOfDeath"] === undefined) {
            nextPersonAge = new Date().getFullYear() - nextPerson["yearOfBirth"];
        } else {
            nextPersonAge = nextPerson["yearOfDeath"] - nextPerson["yearOfBirth"];
        }
        
        return personAge < nextPersonAge ? -1 : 1;
        
    });
    console.table(sortedPeople);
    return sortedPeople[sortedPeople.length - 1];

};

// Do not edit below this line
module.exports = findTheOldest;
