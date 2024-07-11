//1

var unorderedList = document.querySelector("ul#list");
console.dir(unorderedList);

//2

console.log(unorderedList.children[0]);

//3

for (var item of unorderedList.children) {
    console.log(item);
}

//4

unorderedList.children[0].textContent = "First item (edited)";

//5

unorderedList.children[unorderedList.children.length - 1].textContent = "Last item (edited)";

//6

var newLi = document.createElement("li");
newLi.textContent = "Bojan";
console.dir(newLi);

//7

unorderedList.appendChild(newLi);

//8

var divGreeting = document.querySelector("div#greeting");
divGreeting.textContent = "Hello!";

//9

var body = document.querySelector("body");
body.classList.add("body-class");

//10

var imageFirst = document.querySelector("img");
console.log(imageFirst.src);

//11

var divs = document.querySelectorAll("div");
for (var div of divs) {
    console.log(div);
}

//12

var images = document.querySelectorAll("img");
for (var image of images) {
    image.src = "https://www.morrisanimalrefuge.org/" + image.src;
}

//13

var elementsWithClassRemove = document.querySelectorAll(".remove-this-class");
for (var el of elementsWithClassRemove) {
    el.classList.remove("remove-this-class");
}

//14

unorderedList.style.fontFamily = "sans-serif";
divGreeting.style.fontFamily = "sans-serif";

//15

var script = document.createElement("script");
script.textContent = `console.log("This is the log");`;
document.body.appendChild(script);

//16

for (var img of images) {
    var link = document.createElement("a");
    link.href = img.src;
    link.textContent = img.src;
    link.style.display = "block";
    link.target = "_blank";
    document.body.appendChild(link);
}

