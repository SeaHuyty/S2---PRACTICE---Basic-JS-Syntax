function challenge6(voted) {
    if (voted.length == 0) {
        return "There is no vote yet";
    }

    let aCount = 0;
    let bCount = 0;
    let cCount = 0;

    for (let i = 0; i < voted.length; i++) {
        if (voted[i] == 'A') {
            aCount++;
        } else if (voted[i] == 'B') {
            bCount++;
        } else if (voted[i] == 'C') {  // Use else if in case there is other votes beside A, B and C.
            cCount++;
        }
    }

    let array = [aCount, bCount, cCount];
    
    let max = Math.max(...array);

    let candidate = ['A', 'B', 'C'];

    let identifier = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] == max) {
            identifier.push(i);
        }
    }

    let winner = "";

    if (identifier.length == 1) {
        winner += "Candidate " + candidate[0] + " is the winner.";
        return winner;
    }

    for (let i = 0; i < identifier.length; i++) {
        winner += "Candidate " + candidate[i];
        if (i >= 0 && (i != identifier.length - 1)) {
            winner += " and ";
        }
    }
    winner += " are the winners.";

    return winner;
}

let votes = ['A', 'B', 'B', 'C', 'A'];

console.log(challenge6(votes));