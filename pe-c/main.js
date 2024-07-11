//1

var colors = ["white", "green", "red", "blue", "black"];
console.log("The memory of that scene for me is like a frame of film forever frozen at that moment: the " + colors[2] + " carpet, the " + colors[1] + " lawn, the " + colors[0] + " house, the leaden sky. The new president and his first lady. - Richard M. Nixon");

//2

var colors = ["white", "green", "red", "blue", "black"];

for (var color of colors) {
    console.log(color);
}

//3

var meseci = ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"];

for (var mesec of meseci) {
    console.log(mesec);
}

//4

var a = [2, -8, 11];
var b = [11, -100];

if (a.length > b.length) {
    for (var el of a) {
        console.log(el);
    }
} else {
    for (var el of b) {
        console.log(el);
    }
}

//5

var numbers = [-29, 101, 0, -4, 24, 13];

for (var index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

//6

var numbers = [-29, 101, 0, -4, 24, 13];

for (var index = 0; index < numbers.length; index++) {
    console.log(numbers[index] + 1);
}

for (var number of numbers) {
    console.log(number + 1);
}

//7

var numbers = [-29, 101, 0, -4, 24, 13];

for (var index = 0; index < numbers.length; index++) {
    console.log(numbers[index] * 2);
}

//8

var numbers = [-29, 101, 0, -4, 24, 13];

for (var index = numbers.length - 1; index >= 0; index--) {
    console.log(numbers[index]);
}

//9

var numbers = [-29, 101, 0, -4, 24, 13];

for (var index = 1; index < numbers.length; index += 2) {
    console.log(numbers[index]);
}

//10

var numbers = [-29, 101, 0, -4, 24, 13];
var sum = 0;

for (var number of numbers) {
    sum += number;
}

console.log(sum);

//11

var numbers = [-29, 101, 0, -4, 24, 13];
var sum = 0;

for (var number of numbers) {
    sum += number;
}

console.log(sum / numbers.length);

//12

var capitals = [
    {
        "country": "Italy",
        "city": "Rome"
    },
    {
        "country": "Netherlands",
        "city": "Amsterdam"
    }, 
    {
        "country": "Belgium", 
        "city": "Brussels"
    }, 
    {
        "country": "Denmark",
        "city": "Copenhagen"
    }, 
    {
        "country": "Finland",
        "city": "Helsinki"
    }
];

for (var capital of capitals) {
    console.log("The capital of " + capital.country + " is " + capital.city);
}

//13

var prirodniBrojevi = [];

for (var i = 1; i <= 100; i++) {
    prirodniBrojevi.push(i);
}

console.log(prirodniBrojevi);

//14

var parni = [];
var neparni = [];

for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        parni.push(i);
    } else {
        neparni.push(i);
    }
}

console.log(parni);
console.log(neparni);

//15

var array = [];
var a = 11;
var b = 31;

for (var i = a; i <= b; i++) {
    array.push(i);
}

console.log(array);

//16

var numbers = [-29, 101, 0, -4, 24, 13];
var num = -4;
var nadjen = false;

for (var el of numbers) {
    if (el === num) {
        nadjen = true;
        break;
    }
}

if (nadjen) {
    console.log("Broj se nalazi u nizu.");
} else {
    console.log("Broj se ne nalazi u nizu.");
}

//17

var numbers = [-29, 101, 0, -4, 24, 13];
var najveciBroj = numbers[0];

for (var el of numbers) {
    if (el > najveciBroj) {
        najveciBroj = el;
    }
}

console.log(najveciBroj);

for (var index = 0; index < numbers.length; index++) {
    if (numbers[index] > najveciBroj) {
        najveciBroj = numbers[index];
    }
}

console.log(najveciBroj);

//18

var numbers1 = [-29, -101, 0, -4, 24, 13];
var numbers2 = [29, 1, 0, 4, 34, 283];

for (var index = 0; index < numbers1.length; index++) {
    for (var index = 0; index < numbers2.length; index++) {
        console.log(numbers1[index] + numbers2[index]);
    }
}

//19

var a = ["Bojan", "Marko", "Nikola"];
var b = ["Ivic", "Markovic", "Nikolic"];
var c = {};

for (var index = 0; index < a.length; index++) {
    for (var index = 0; index < b.length; index++) {
        c[a[index]] = b[index];
    }
}

console.log(c);

//20

var meseci = [
    {"mesec": "Januar", "brojDana": 31},
    {"mesec": "Februar", "brojDana": 28},
    {"mesec": "Mart", "brojDana": 31},
    {"mesec": "April", "brojDana": 30},
    {"mesec": "Maj", "brojDana": 31},
    {"mesec": "Jun", "brojDana": 30},
    {"mesec": "Jul", "brojDana": 31},
    {"mesec": "Avgust", "brojDana": 31},
    {"mesec": "Septembar", "brojDana": 30},
    {"mesec": "Oktobar", "brojDana": 31},
    {"mesec": "Novembar", "brojDana": 30},
    {"mesec": "Decembar", "brojDana": 31}
];

// for (var el of meseci) {
//     for (var i = 1; i <= el.brojDana; i++) {
//         console.log(i + ". " + el.mesec);
//     }
// }

for (var index = 0; index < meseci.length; index++) {
    for (var i = 1; i <= meseci[index].brojDana; i++) {
        console.log(i + ". " + meseci[index].mesec);
    }
}

