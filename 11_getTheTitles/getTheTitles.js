const getTheTitles = function(library) {

    let titlesArray = [];
    library.forEach(book => {
        titlesArray.push(book["title"]);
    })

    return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
