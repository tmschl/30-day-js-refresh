var expect = function(val) {
  return {
    toBe: function(newVal) {
      if (val === newVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function(newVal) {
      if (val !== newVal) {
        return true
      } else {
        throw new Error("Equal");
      }
    }
  } 
};