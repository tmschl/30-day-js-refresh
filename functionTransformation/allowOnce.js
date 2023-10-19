// pretty simple little fn
// sets up memoize well (sort of)
var once = function(fn) {
  let called = false; 
	return function(...args){
    if (!called) {
      called = true;
      return fn(...args);
    } else {
      return undefined;
    }
  }
};