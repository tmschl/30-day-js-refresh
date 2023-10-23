function memoize(fn) {
  let cache = {}    

  return function(...args) {
    let functionString = `${fn}${args}`;
    let valueExists = cache[functionString];
    console.log(valueExists);
    if (valueExists || valueExists === 0) {
      return cache[functionString];
    } else {
      let fnSolution = fn(...args);
      cache[functionString] = fnSolution;
      return fnSolution;
    }
  }

