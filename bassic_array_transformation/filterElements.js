var filter = function(arr, fn) {
  let solutionArray = [];
  for (let i = 0; i < arr.length; i++) {
    let booleanResponse = fn(arr[i], i);
    if (booleanResponse) {
      solutionArray.push(arr[i]);
    }
  }  
  console.log(solutionArray);
  return solutionArray;
}

function greaterThan10(n) { return n > 10; }

filter([0,10,20,30,40], greaterThan10)