
const isPrime = function (arg) {
    console.time("timer");

    requireMaxSize(arg);
    for (var i = (arg-1); i >= 2; i -= 1) {
      debugger;
        if (arg % i === 0) {
            
            console.timeEnd("timer");
            console.log("false");
            return false;
        }
    }
    console.timeEnd("timer");
    console.log("true");
    return true;
    
}
