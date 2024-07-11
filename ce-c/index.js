//1

for (var i = 0; i <= 5; i++) {
    console.log(i);
}

//2

var i = 20;

while (i <= 30) {
    console.log(i);
    i++;
}

//3

for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (var i = 0; i <= 10; i++) {
    if (i !== 0 && i % 2 === 0) {
        console.log(i);
    }
}

//4

var i = 1;
var counter = 0;

while (counter < 10) {
    if (i % 2 !== 0) {
        counter++;
        console.log(i);
    }
    i++;
}

//5

var counter = 0;

for (var i = 1; counter < 10; i++) {
    if (i % 2 !== 0) {
        counter++;
        console.log(i);
    }
}

//6

for (var i = 10; i >= 0; i--) {
    console.log(i);
}

//7

var a = 8;
var b = 22;

for (var i = a; i <= b; i++) {
    console.log(i);
}

//8

var sum = 0;

for (var i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);

//9

var sum = 0;
var counter = 0;
var i = 1;

while (counter < 20) {
    if (i % 2 !== 0) {
        counter++;
        sum += i;
    }
    i++; 
}

console.log(sum);

//10

var proizvod = 0;
var a = 15;
var b = 5;

for (var i = 1; i <= a; i++) {
    proizvod += b;
}

console.log(proizvod);

//11

var stepen = 1;
var a = 2;
var b = 4;

for (var i = 1; i <= b; i++) {
    stepen *= a;
}

console.log(stepen);

//12

var a = 7;

for (var i = 1; i <= 10; i++) {
    console.log(a * i);
}

//13

var a = 7;
var string = "";

for (var i = 1; i <= 10; i++) {
    string += " " + a * i;
}

console.log(string);

//14

var factoriel = 1;
var a = 5;

for (var i = 1; i <= a; i++) {
    factoriel *= i;
}

console.log(factoriel);

//15

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//16

var counter = 0;

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        counter++;
    }
}

console.log(counter);

//17

var a = 10;
var b = 40;
var counter = 0;

for (var i = a; i <= b; i++) {
    if (i % 3 === 0) {
        counter++;
    }
}

console.log(counter);

//18

var counter3 = 0;
var counter7 = 0;

var a = 8;
var b = 73;

for (var i = a; i <= b; i++) {
    if (i % 3 === 0) {
        counter3++;
    }
    if (i % 7 === 0) {
        counter7++;
    }
}

console.log(counter3);
console.log(counter7);

//22

var i = 1;
var counter = 0;

while (counter < 27) {
    if (i % 7 === 0 && i % 13 === 0) {
        counter++;
        console.log(i);
    }
    i++;
}

