const removeFromArray = function(array, ...num) {
    array = array.filter(function(el) {
        return !num.includes(el);
    });
    return array

};

// Do not edit below this line
module.exports = removeFromArray;
