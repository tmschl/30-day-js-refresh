var createCounter = function(init) {
  const savedInit = init;
   return {
     increment: function() {
       return ++init;
     },
     decrement: function() {
       return --init;
     },
     reset: function() {
       init = savedInit;
       return savedInit;
     }
   } 
}