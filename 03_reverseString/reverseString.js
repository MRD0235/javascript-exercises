const reverseString = function(string) {
    // initialize empty string for original to be copied into
    newString = ""
    // take last letter of original and put it in first slot
    for (let i = string.length; i >= 0; i--) {
        let letter = string.slice(i-1,i)
        newString += letter
    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;
