//1

function dajRazliku(a, b) {
    return a - b;
}

console.log(dajRazliku(5, 1));

//2

function dajRez(a, b, c) {
    return a * b - c;
}

console.log(dajRez(5, 5, 10));

//3

function dajRezul(a, b, c) {
    if (a > 0) {
        return b + c;
    }
    return b - c;
}

console.log(dajRezul(10, 5, -2));

//4

function dajNajmanjiBroj(array) {
    var najmanji = array[0];
    for (var el of array) {
        if (el < najmanji) {
            najmanji = el;
        }
    }
    return najmanji;
}

console.log(dajNajmanjiBroj([2, -20, 8, -50, 27]));

//5

function dajZbir(array) {
    var sum = 0;
    for (var el of array) {
        sum += el;
    }
    return sum;
}

console.log(dajZbir([-12, 10, 0, -13, 36]));

//6

function dajProizvod(array) {
    var proizvod = 1;
    for (var el of array) {
        proizvod *= el;
    }
    return proizvod;
}

console.log(dajProizvod([1, -15, 20, 0, 12]));

//7

function dajNepNiz(a, b) {
    var niz = [];
    for (var i = a; i <= b; i++) {
        if (i % 2 !== 0) {
            niz.push(i);
        }
    }
    return niz;
}

console.log(dajNepNiz(11, 32));

//8

function dajSrednju(array) {
    var sum = 0;
    for (var el of array) {
        sum += el;
    }
    return sum / array.length;
}

console.log(dajSrednju([1, -8, 0, -12, 33]));

//9

function getBoolean1(array, dG, gG) {
    if (array[0] >= dG && array[array.length - 1] <= gG) {
        return true;
    }
    return false;
}

console.log(getBoolean1([-120, -56, 0, 19, 48], -150, 30));

//10

function getBoolean2(array, dG, gG) {
    for (var el of array) {
        if (el < dG || el > gG) {
            return false;
        }
    }
    return true;
}

console.log(getBoolean2([-120, -56, 0, 19, 48], 150, 130));

//11

function getArray(n) {
    var array = [];
    var counter = 0;
    for (var i = n; counter < 10; i++) {
        if (i % 2 === 0) {
            counter++;
            array.push(i);
        }
    }
    return array;
}

console.log(getArray(12));

function getArray1(n) {
    var counter = 0;
    var niz = [];
    var i = n;
    while (counter < 10) {
        if (i % 2 === 0) {
            counter++;
            niz.push(i);
        }
        i++;
    }
    return niz;
}

console.log(getArray1(12));

//12

function getCounter(array, n) {
    var counter = 0;
    for (var el of array) {
        if (el === n) {
            counter++;
        }
    }
    return counter;
}

console.log(getCounter([4, -18, 3, 0, -50, 3], 23));

//13

function getCounter2(array, a) {
    var counter = 0;
    for (var element of array) {
        if (element % a === 0) {
            counter++;
        }
    }
    return counter;
}

console.log(getCounter2([4, -3, 11, 20, 100, -200], 4));

//14

function getIndex(array) {
    var minEl = array[0];
    var minIndex = 0;
    for (var index = 0; index < array.length; index++) {
        if (array[index] < minEl) {
            minEl = array[index];
            minIndex = index;
        }
    }
    return minIndex;
}

console.log(getIndex([4, 0, 12, -18, 55, -63, 2000]));

//15

var matrix = [[1, -10, 18], [-22, 22, 100], [-44, 56]];
function getElements(matrix) {
    for (var array of matrix) {
        for (var el of array) {
            console.log(el);
        }
    }
}

getElements(matrix);

//16

function getSum(matrix) {
    var sum = 0;
    for (var array of matrix) {
        for (var el of array) {
            sum += el;
        }
    }
    return sum;
}

console.log(getSum(matrix));

//17

var matrix = [
    [1, -20, 16, 13],
    [3, -14, 50, -165],
    [44, -122, 88, 0]
];

var array = ["left", "right", "up", "down", "up", "down", "right", "down"];

function getElement(matrix, array) {
    var row = 0;
    var column = 0;
    for (var step of array) {
        if (step === "up") {
            if (row === 0) {
                row = matrix.length - 1;
            } else {
                row--;
            }
        } else if (step === "down") {
            if (row === matrix.length - 1) {
                row = 0;
            } else {
                row++;
            }
        } else if (step === "left") {
            if (column === 0) {
                column = matrix[row].length - 1;
            } else {
                column--;
            }
        } else if (step === "right") {
            if (column === matrix[row].length - 1) {
                column = 0;
            } else {
                column++;
            }
        }
    }
    return matrix[row][column];
}

console.log(getElement(matrix, array));


