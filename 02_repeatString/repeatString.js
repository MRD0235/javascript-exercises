const repeatString = function(string, num) {
    let words =""
    if (num < 0) {
        return "ERROR"
    } else {
        for (let x = 0; x < num; x++) {
            words += string
        }
        return words
    }
};

// Do not edit below this line
module.exports = repeatString;
