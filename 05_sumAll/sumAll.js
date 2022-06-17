const sumAll = function(num1, num2) {
    let diff = Math.abs(num1-num2);
    let integers = diff + 1;
    let answer = ((num1 + num2)*integers)/2;

    if (num1 < 1 || num2 < 1 ||
        Number.isInteger(num1) !== true || 
        Number.isInteger(num2) !== true) {
            return 'ERROR'
    }

    return answer

};

// Do not edit below this line
module.exports = sumAll;
