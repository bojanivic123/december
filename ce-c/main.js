// 1

var a = 1;
var b = 8;

if (a + b > 10) {
    console.log(a + b);
} else {
    console.log(a - b);
}

//2

var trenutnoSati = 4;

if (trenutnoSati < 6 || trenutnoSati > 22) {
    console.log("Palim bojler.");
} else {
    console.log("Ne palim bojer.");
}

//3

var trenutniMesec = 5;

if (trenutniMesec <= 3) {
    console.log("Prvi kvartal.");
} else if (trenutniMesec <= 6) {
    console.log("Drugi kvartal.");
} else if (trenutniMesec <= 9) {
    console.log("Treci kvartal.");
} else {
    console.log("Cetvrti kvartal.");
}

//4

var a = 6;
var b = 11;
var operacija = "pomnozi";

if (operacija === "saberi") {
    console.log(a + b);
} else if (operacija === "oduzmi") {
    console.log(a - b);
} else if (operacija === "pomnozi") {
    console.log(a * b);
} else if (operacija === "podeli") {
    console.log(a / b);
}

//5

var brojBodova = 89;

if (brojBodova < 55) {
    console.log("Ocena 5");
} else if (brojBodova < 64) {
    console.log("Ocena 6");
} else if (brojBodova < 74) {
    console.log("Ocena 7");
} else if (brojBodova < 84) {
    console.log("Ocena 8");
} else if (brojBodova < 94) {
    console.log("Ocena 9");
} else {
    console.log("Ocena 10");
}

//6

var n = 1;

if (n === 0) {
    console.log("Nedefinisano.");
} else if (n % 2 === 0) {
    console.log("Broj je paran.");
} else if (n % 2 !== 0) {
    console.log("Broj je neparan.");
}

//7

var trenutnaGodina = 2024;

if (trenutnaGodina % 4 === 0) {
    console.log("Godina je prestupna");
} else {
    console.log("Godina nije prestupna.");
}

//8

var broj = 22;

if (broj > -10 && broj < 10) {
    console.log("Jednocifren");
} else if (broj > -100 && broj < 100) {
    console.log("Dvocifren");
} else if (broj > -1000 && broj < 1000) {
    console.log("Trocifren");
} else {
    console.log("Ostalo");
}

//9

var a = -180;
var b = -122;
var c = 340;

if (a > b && a > c) {
    if (b > c) {
        console.log("najveci broj je " + a + " a najmanji broj je " + c);
    } else {
        console.log("najveci broj je " + a + " a najmanji broj je " + b);
    }
} else if (b > a && b > c) {
    if (a > c) {
        console.log("najveci broj je " + b + " a najmani broj je " + c);
    } else {
        console.log("najveci broj je " + b + " a najmanji broj je " + a);
    }
} else {
    if (a > b) {
        console.log("najveci broj je " + c + " a najmanji broj je " + b);
    } else {
        console.log("najveci broj je " + c + " a najmanji broj je " + a);
    }
}

//10

var a = 180;
var b = -122;
var c = -340;

if (a > b && a > c) {
    if (b > c) {
        console.log(c, b, a);
    } else {
        console.log(b, c, a);
    }
} else if (b > a && b > c) {
    if (a > c) {
        console.log(c, a, b);
    } else {
        console.log(a, c, b);
    }
} else {
    if (a > b) {
        console.log(b, a, c);
    } else {
        console.log(a, b, c);
    }
}

