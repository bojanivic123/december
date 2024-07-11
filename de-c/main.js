//1

var input = document.createElement("input");
var button = document.createElement("button");
document.body.appendChild(input);
document.body.appendChild(button);

button.addEventListener("click", function() {
    console.log(input.value);
});

//2

var input1 = document.createElement("input");
var input2 = document.createElement("input");
var input3 = document.createElement("input");
document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(input3);
var inputs = document.querySelectorAll("input");
input2.value = "Bojan";
input3.value = "Milica";
for (var input of inputs) {
    console.log(input.value);
}

//3

var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
button1.textContent = "red";
button2.textContent = "yellow";
button3.textContent = "green";
var div = document.createElement("div");
div.textContent = "Dragan Djilas";
document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
document.body.appendChild(div);
var buttons = [button1, button2, button3];
for (var button of buttons) {
    button.addEventListener("click", function(e) {
        var buttonText = e.target.textContent;
        if (buttonText === "red") {
            div.style.backgroundColor = "red";
        } else if (buttonText === "yellow") {
            div.style.backgroundColor = "yellow";
        } else if (buttonText = "green") {
            div.style.backgroundColor = "green";
        } 
    });
}

//4

var buttonH = document.createElement("button");
buttonH.textContent = "Sakrij me";
document.body.appendChild(buttonH);

buttonH.addEventListener("click", function() {
    setTimeout(function() {
        buttonH.style.display = "none";
    }, 5000);
});

//6

function getText(button) {
    button.addEventListener("click", function() {
        console.log(button.textContent);
    });
}

getText(button2);

//7

var span = document.createElement("span");
document.body.appendChild(span);
var buttonIS = document.createElement("button");
document.body.appendChild(buttonIS);
buttonIS.addEventListener("click", function() {
    span.textContent = input1.value;
});

//8

var ul = document.createElement("ul");
document.body.appendChild(ul);
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
var buttonAdd = document.createElement("button");
buttonAdd.textContent = "Add new";
document.body.appendChild(buttonAdd);
var inputA = document.createElement("input");
document.body.appendChild(inputA);
buttonAdd.addEventListener("click", function() {
    var li = document.createElement("li");
    li.textContent = inputA.value;
    inputA.value = "";
    ul.appendChild(li);
});



