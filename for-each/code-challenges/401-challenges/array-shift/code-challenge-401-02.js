function shift(arry, value) {
    var middleIndex = Math.ceiling(array.length /2)
    var results = [];
    for (var i = 0; i <= array.length; i++) {
        if (i < middleIndex) {
            results.push(array[i]);
        } else if (i === middleIndex) {
            results.push(value);
        } else {
            if (i > middleIndex) {
                results.push(array[i-1])
            }
        }
    }
}