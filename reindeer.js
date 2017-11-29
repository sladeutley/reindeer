var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

// Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. The name of the reindeer should be prepended with the corresponding color from the other array.

// Example output:

// Blue Dasher

// Red Dancer

function printToDOM(array) {
    hohohoElement.innerHTML += array;
}

for (let i = 0; i < reindeer.length; i++) {
    printToDOM(colors[i] + " " + reindeer[i] + "<br>" + "<br>");
}