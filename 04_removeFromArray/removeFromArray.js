const removeFromArray = function(array, ...args) {

    let newArray = []
    let test = true

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (array[i] === args[j]) {
                test = false
            }
        }
        (test) ? newArray.push(array[i]) : test = true
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
