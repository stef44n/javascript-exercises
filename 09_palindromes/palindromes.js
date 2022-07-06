const palindromes = function(string) {

    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const result = string.replace(regex, '');

    let stringArray = result.split('');
    let sLen = stringArray.length;
    let newArr = [];


    for (let i = sLen - 1; i >=0; i--) {
        let popped = stringArray.pop()
        newArr.push(popped)
    }

    let reversedStr = newArr.join('')

    if (reversedStr === result) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
