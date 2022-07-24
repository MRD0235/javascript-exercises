const sumAll = function(min, max) {
    if (typeof min !== "number" || typeof max !== "number") {
        return "ERROR"
    } else if (min < 0 || max < 0) {
        return "ERROR"
    } else {
        let sum = 0
        for (let i = Math.min(min, max); i <= Math.max(min, max); i++) {
            sum += i
        }

        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;
