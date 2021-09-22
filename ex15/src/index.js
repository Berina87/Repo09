// Only change code below this line
var myNumbers = "";
function myDoWhile(){
    var i = 0;
    do {
        myNumbers += i;
        i++;
        myNumbers += ", ";
    } while (i < 9);

    myNumbers += i;

return myNumbers;
}

console.log(myDoWhile());
// Only change code above this line
module.exports = myDoWhile;