const reverseString = function(string) {
    let stringArray = string.split('');
    let sLen = stringArray.length;
    let newArr = [];

    for (let i = sLen - 1; i >=0; i--) {
        let popped = stringArray.pop()
        newArr.push(popped)
    }

    let reversedStr = newArr.join('')
    return reversedStr
};

// Do not edit below this line
module.exports = reverseString;
