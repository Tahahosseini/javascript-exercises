const number = Math.floor(Math.random() * 1000);
const repeatString = function (string, num) {

    if (num < 0) return 'ERROR'
    if (num === number) return string.repeat(number)
    return string.repeat(num)

};


// Do not edit below this line
module.exports = repeatString;
