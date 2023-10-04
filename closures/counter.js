// n++ returns n firss and then increments !!! postfixe behavior. prefix increments first then returns
// wild

var createCounter = function(n) {
    return () => n++;
}