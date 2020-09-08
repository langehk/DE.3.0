
const isPrime = function (arg) {
    console.time("timer");

    requireMaxSize(arg);
    for (var i = (arg-1); i >= 2; i -= 1) {

      if(arg == 2)
      {
        console.timeEnd("timer");
        console.log("true");
        return true;    
      }
      else if (arg % 2 === 0) {
            
        console.timeEnd("timer");
        console.log("false");
        return false;
      }
        else if (arg % i === 0) {
            
            console.timeEnd("timer");
            console.log("false");
            return false;
        }
        
    }
    console.timeEnd("timer");
    console.log("true");
    return true;
    
}
