import mylib2  from './myLib2.js';

let input1 = document.getElementById("input1").value;
let input2 = document.getElementById("input2").value;




//Calculate prime number
const isPrime = function (arg) {
    for (var i = 2; i < arg; i += 1) {
        if (arg % i === 0) {
            return false;
        }
    }
    return true;
}