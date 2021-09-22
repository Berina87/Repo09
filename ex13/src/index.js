var i = 5;
var fiveNumbers ="";
function inverseWhile(){
        while (i >= 0) {
            fiveNumbers += i;
            if (i > 0) {
                fiveNumbers += ",";
            }
            i--;
        } 
    return fiveNumbers;
}
// Only change code above this line

console.log(inverseWhile());
module.exports = inverseWhile;


