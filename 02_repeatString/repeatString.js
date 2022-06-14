const repeatString = function(string, num) {
    let text = '';
    let zero = 0;
    function stringRepeat() {
        if (num < 0) {
            return 'ERROR'
        }
        while (zero < num) {
            text += string;
            zero++;
        }
        return text;
    }
        return stringRepeat();
};

// Do not edit below this line
module.exports = repeatString;
