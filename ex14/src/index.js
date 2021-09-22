// Only change code below this line
var evenNumbers = "";
var evenInverseNumbers = "";

function myForLoop1(){
    for(var i = 0; i < 9; i= i+2 ) {
        evenNumbers += i;
        if (i <= 6) {
            evenNumbers += ","
        }
    }
    return evenNumbers;
}

function myForLoop2(){
    for(var i = 8; i >= 0 ; i = i-2 ) {
        if (i > 0) {
            evenInverseNumbers += i;
            evenInverseNumbers += ","
        } else if (i === 0) {
            evenInverseNumbers += i;
        }
    }
    return evenInverseNumbers;
}

// Only change code above this line

console.log(myForLoop1());
console.log(myForLoop2());
module.exports = {
    myForLoop1,
    myForLoop2
};

