const sumAll = function(a,b) {
    if((a >= 0 && b >= 0) && (Number.isInteger(a) && Number.isInteger(b))){
    const greaterNum = (a > b) ? a : b;
    const smallerNum = (a < b) ? a : b;
    // console.log(smallerNum, greaterNum);
    let total =0;
    for(let i=smallerNum; i <= greaterNum; i++){
        total += i;
    }
        return total;
    }else{
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
