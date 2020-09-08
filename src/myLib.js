

const isPrime = function (arg) {
    
    requireMaxSize(arg);
    for (var i = 2; i < arg; i += 1) {
        if (arg % i === 0) {
            return false;
        }
    }
    return true;
}
