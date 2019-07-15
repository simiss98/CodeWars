function fizzbuzz(n){
  let input = [];
  for (var i=1; i <= n; i++){
    if (i % 3 == 0 && i % 5 == 0){
      input.push("FizzBuzz");
    } else if (i % 3 == 0) {
      input.push("Fizz");
    } else if (i % 5 == 0) {
      input.push("Buzz");
    } else {
      input.push(i);
    }
  }
return input;
}

fizzbuzz(20)
