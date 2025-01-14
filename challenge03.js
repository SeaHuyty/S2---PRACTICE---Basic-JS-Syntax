function challenge3(array) {
    if (array.length == 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let averageGrade = sum / array.length;
    return averageGrade;
}

let arr = [85, 90, 78, 92];

console.log(challenge3(arr));