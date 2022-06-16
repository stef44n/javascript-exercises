const removeFromArray = function(array, num) {
    const index = array.indexOf(num);
        if (index > -1) {
            array.splice(index, 1);
        }
    return array

};

// Do not edit below this line
module.exports = removeFromArray;
