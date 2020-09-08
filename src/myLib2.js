
let maxNumber = 9007199254740991;

function requireMaxSize(maxInt){

    if(maxInt < 0)
    {
        alert("Enter a higher number");
    }
    else if(maxInt >= maxNumber)
    {
       alert("Your number is too high!");
    }

    return maxInt;

}


