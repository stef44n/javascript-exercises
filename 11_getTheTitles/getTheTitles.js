const getTheTitles = function(books) {

    let newBooks = []
    let bLen = books.length
    for (let i = 0; i < bLen; i++) {
        let newList = books[i]['title']
        newBooks.push(newList)
    }

    return newBooks;

};

// Do not edit below this line
module.exports = getTheTitles;
