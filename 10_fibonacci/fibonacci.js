const fibonacci = function(num) {
    const init = [0, 1]

    if (num < 0) {
        return 'OOPS'
    }

    function fibb(num) {
        for (let i = 0; i < num - 1; i++) {
            let newArr = Number(init[i] + init[i + 1]);
            init.push(newArr);
        }
    }
    fibb(num)
    return init[num]
};

// Do not edit below this line
module.exports = fibonacci;
