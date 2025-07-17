function createCounter(num = 0) {
  let count = num;
  return {
    increment: function(num = 1) { 
      count += num;
      return count;
    },
    decrement: function(num = 1) { 
      count -= num;
      return count;
    },
    reset: function() {count = 0; return count},
    getValue: function() { return count; }
  };
}

const counter = createCounter();
  console.log(counter.increment()); // 1
  console.log(counter.increment()); // 2
  console.log(counter.decrement()); // 1
  console.log(counter.reset()); // 0
  console.log(counter.getValue()); // 0

  console.log('===================================');
  