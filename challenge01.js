function challenge1(width, height) {
    let rectangleString = '';
    for (let pHeight = 0; pHeight < height; pHeight++) {
        for (let pWidth = 0; pWidth < width; pWidth++) {
            rectangleString += "*";
        }
        rectangleString += "\n";
    }
    return rectangleString;
}

console.log(challenge1(5, -2));