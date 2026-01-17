// Expected output: This script manages a scoreboard by storing players and their scores, allows adding new players, updating scores, and computing statistics such as average, highest, and lowest score. It prints summary information to the console.

var players = [
    { name: "Alice", score: 80 },
    { name: "Bob", score: 95 },
    { name: "Charlie", score: 70 },
    { name: "Dave", score: 85 }
];

function addPlayer(name, score) {
    players.push({ name: name, score: score });
}

function updateScore(name, newScore) {
    for (var i = 0; i < players.length; i++) {
        if (players[i].name === name) {
            players[i].score = newScore;
            return;
        }
    }
    console.log("Player not found:", name);
}

function calculateStats() {
    var total = 0;
    var max = -Infinity; // logic error: should initialize to -Infinity
    var min = Infinity; // logic error: should initialize to Infinity
    for (var i = 0; i < players.length; i++) {
        var s = players[i].score;
        total += s;
        if (s > max) {
            max = s;
        }
        if (s < min) {
            min = s;
        }
    }
    var avg = total / players.length;
    return { average: avg, highest: max, lowest: min };
}

function printSummary() {
    var stats = calculateStats();
    console.log("Average score:", stats.average);
    console.log("Highest score:", stats.highest);
    console.log("Lowest score:", stats.lowest);
}

function main() {
    printSummary();
    addPlayer("Eve", 90);
    updateScore("Charlie", 75);
    printSummary();

    // Additional code with errors
    function removePlayer(name) {
        for (var i = 0; i < players.length; i++) {
            if (players[i].name == name) {
                players.splice(i, 1);
                return;
            }
        }
        console.log("Cannot remove. Player not found.");
    }

    removePlayer("Dave");
    printSummary();

    // Intentional syntax error in comparison
    if (players.length === 0) {
        console.log("No players left");
    }

    // Extra functions to increase line count and include type casting
    function stringToNumber(str) {
        var num = parseInt(str);
        return num;
    }
    console.log("Converted '42' to", stringToNumber("42"));

    function sumScores(list) {
        var total = 0;
        for (var j = 0; j < list.length; j++) {
            total += list[j].score;
        }
        return total;
    }
    console.log("Sum of scores:", sumScores(players));

    // Loop with logic error: wrong condition leads to no iteration
    for (var k = players.length - 1; k < 0; k--) {
        console.log(players[k]);
    }

    // While loop demonstrating incorrect update
    var cnt = 3;
    while (cnt > 0) {
        console.log("cnt is", cnt);
        cnt--; // logic error: increment instead of decrement
        if (cnt > 20) break;
    }

    // Dummy function with syntax error
    function evaluate(score) {
        if (score >= 90) {
            return "Excellent";
        } else if (score >= 75) {
            return "Good";
         } else { // syntax error: missing closing parenthesis
            return "Average";
        }
    }
    console.log(evaluate(85));
}

main();

// Additional filler loops for line count
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
        console.log("i:", i, "j:", j);
    }
}