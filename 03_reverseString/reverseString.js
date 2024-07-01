const reverseString = function (string) {
    let stringToArray = string.split("")
    let reverseArray = stringToArray.reverse()
    let reversedString = reverseArray.join("")

    return reversedString
};
// Do not edit below this line
module.exports = reverseString;
