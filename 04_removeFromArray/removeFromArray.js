const removeFromArray = function (array, ...remove) {
    let newArray = []
    // go through the array
    array.forEach((item) => { // when you go through it, do the following
        if (!remove.includes(item)) // execute the body unless "!" the condition is true
            newArray.push(item)
    }
    )
    return newArray
}

// Do not edit below this line
module.exports = removeFromArray;
