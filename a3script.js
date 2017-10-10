

var usera = window.prompt("Log in", "Enter password here");

var s = 0;



if (usera == "ilovekarl"){
    s++;
} 

while (s == 0) {
     usera = window.prompt("Incorrect, try again", "Enter password here");
    if (usera == "ilovekarl") {
        s++; }
    
}

if (s == 1) {
    window.alert("Login successful");
}
