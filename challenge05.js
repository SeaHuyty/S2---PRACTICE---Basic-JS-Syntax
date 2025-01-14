function challenge5(string) {
    let identifier = 1;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == " ") {
            identifier++;
        }
    }
    return identifier;
}

let text = "a bb ccc ddddddd e";

console.log(challenge5(text));