function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
        return [];
    } else {

        var array = [0, 0];

        for(var n = 0; n < input.length; n++) {
            if(input[n] <= 0) {
                array[1] += input[n];
            } else {
                array[0] += 1;
            }
        }   
    }
    return array;
}

countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])