//1

function getElements(array) {
    array.forEach(function(el) {
        console.log(el);
    });
}

getElements([1, 2, 3, 4, 5]);

//2

function getElements1(array) {
    array.forEach(function(el) {
        console.log(el + 2);
    });
}

getElements1([1, 2, 3, 4, 5]);

//3

function getElements2(array, N) {
    array.forEach(function(el) {
        console.log(el + N);
    });
}

getElements2([1, 2, 3, 4, 5], 5);

//4

function print() {
    console.log("Bojan Ivic");
}

function getElements3(array, print) {
    array.forEach(function(el) {
        print();
    });
}

getElements3([1, 2, 3, 4, 5], print);

//5

var string = "Milica";

function getString(string) {
    setTimeout(function() {
        console.log(string);
    }, 2000);
}

getString(string);

//6

function getString1(string) {
    setTimeout(function() {
        string.split("").forEach(function(el) {
            console.log(el);
        });
    }, 2000);
}

getString1(string);

//7

function get(print) {
    setTimeout(function() {
        print();
    }, 2000);
}

get(print);

//8

function get1(print, N) {
    setTimeout(function() {
        print();
    }, N);
}

get1(print, 6000);

//9

function getArray(array) {
    array.sort(function(a, b) {
        return b - a;
    });
    return array;
}

console.log(getArray([1, 2, 3, 4, 5]));

//10

var array = [{"value": 5}, {"value": 2}, {"value": 8}, {"value": 1}];

function getArray1(array) {
    array.sort(function(a, b) {
        return a.value - b.value;
    });
    return array;
}

console.log(getArray1(array));

//11

function call(print, N) {
    for (var i = 1; i <= N; i++) {
        print();
    }
}

call(print, 7);

//14

var person = {
    "name": "Bojan",
    "age": 26
}

function log() {
    console.log("Rokac");
}

function attachMethod(person, log) {
    person.newMethod = log;
}

attachMethod(person, log);
person.newMethod();

//15

function callOn(person, log) {
    person.newMethod = log;
    person.newMethod();
    delete person.newMethod;
}

callOn(person, log);

//16

function multiplyBy5(num) {
    return num * 5;
}

console.log(multiplyBy5(5));

//18

function multiply(num, N) {
    return num * N;
}

console.log(multiply(5, 15));