var map = function(arr, fn) {
  let solutionArray = [];

  for (let i = 0; i < arr.length; i++) {
    let currentResult = fn(arr[i], i)
    solutionArray.push(currentResult);
  }

  console.log(solutionArray);

  return solutionArray;
}