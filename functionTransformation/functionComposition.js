var compose = function(functions) {
	return function(x) {
    for (let i = functions.length - 1; i >= 0; i--) {
      let currentFunction = functions[i];
      let currentResult = currentFunction(x);
      x = currentResult;
      console.log(functions[i], i, currentResult);
    }
    return x;
  }
}
