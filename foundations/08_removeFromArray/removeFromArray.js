const removeFromArray = function(arr,...args) {
    const mainArray = arr;
    let removalValuesArr = Array.from(args);
    const result = mainArray.filter(item=> !removalValuesArr.includes(item));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
