function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1) {
        return [];
    }
    var array = [0, 0];

    for(var n = 0; n < input.length; n++) {
        if(input[n] <= 0) {
            array[1] += input[n];
      } else {
            array[0] += 1;
      }
    }
    return array;