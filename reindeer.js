console.log("hey");

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

// Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. The name of the reindeer should be prepended with the corresponding color from the other array.

// Example output:

// Blue Dasher

// Red Dancer

function printToDOM(array) {
    console.log("hi");
    hohohoElement.innerHTML += array;
}

function shortestArray(array1, array2) {
    console.log(array1, array2);
    let shortestArray = [];
    if (array1.length < array2.length) {
        shortestArray = array1.length;
    } else {
        shortestArray = array2.length;
    }
    return shortestArray
}


let arrayLength = shortestArray(colors, reindeer);
//I WANT TO MAKE THIS UNIVERSAL, BUT PARAMATERS ARE THE ARRAYS COLORS AND REINDEER NOT ARRAY1 AND ARRAY2
//wrap for loop in function to make universal

function universalArray(array1, array2) {
for (let i = 0; i < arrayLength; i++) {
    console.log(shortestArray);
    printToDOM(array1[i] + " " + array2[i] + "<br>" + "<br>");
    }
}
universalArray(colors, reindeer);

// for (let i = 0; i < reindeer.length; i++) {
//     printToDOM(colors[i] + " " + reindeer[i] + "<br>" + "<br>");
// }