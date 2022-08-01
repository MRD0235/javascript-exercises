const fibonacci = function(desiredFibNum) {
    desiredFibNum = Math.floor(desiredFibNum)
    if (desiredFibNum <= 0) {return "OOPS"}
    else {    
        let oneBack = 1
        let twoBack = 1
        if (desiredFibNum === 1 || desiredFibNum === 2) return 1
        for (let i = 2; i < desiredFibNum; i++) {
            fibNum = oneBack + twoBack
            twoBack = oneBack
            oneBack = fibNum
        }
        return fibNum
    }
    return desiredFibNum
}

// Do not edit below this line
module.exports = fibonacci;
