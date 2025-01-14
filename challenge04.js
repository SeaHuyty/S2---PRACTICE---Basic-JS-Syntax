function challenge4(string, character) {
    let identifier = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == character) {
            identifier++;
        }
    }
    return identifier;
}

let text = "abc";
let char = 'd';

console.log(challenge4(text, char));