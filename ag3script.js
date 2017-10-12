var rn = Math.floor((Math.random() * 5) + 1);

var g = window.prompt("Guess a number between 1 and 5!", "Enter guess here");

var gn = 1;

if (g == rn) {
    window.alert("You are correct! It took one guess.");
}

while (g != rn) {
    g = window.prompt("That was incorrect! Guess again.", "Enter guess here");
    gn=gn+1;

}
 window.alert("You are correct! it took " + gn + " tries");
