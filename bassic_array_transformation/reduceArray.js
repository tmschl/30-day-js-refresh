var reduce = function(nums, fn, init) {
  let solution = 0;
  nums.length === 0 ? solution = init : solution = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 && nums.length !== 0) {
      solution = fn(init, nums[i])
    } else if (nums.length === 0) {
      return init;
    } else {
      solution = fn(solution, nums[i]);
    }

  }
  console.log(solution);
  return solution;  
};

reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0)