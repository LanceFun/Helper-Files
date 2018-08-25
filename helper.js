/*
  helper.js
  A javascript file that stores usefull functions that can be used by other javascript files
  Created By: Russell Davidson
*/

//A function that makes it easy to select an element using its id
function $(id) {
    return document.getElementById(id);
}

//FUNCTION: Used to reverse text
function reverse(s) {
    return s.split("").reverse().join("")
}

//FUNCTION: Used to reverse an array
function reverseArray(array) {
    return ;
}

//FUNCTION: Used to handle my errors created by the getNumberInput function
function handleError(e) {
    console.log(e.name + ": " + e.message);
    if (e.message === "NotANumber") {
        alert("Please enter in a number!");
    } else if (e.message === "NumberTooBig") {
        alert("Please enter in a smaller number");
    } else if (e.message === "NumberTooSmall") {
        alert("Please enter in a larger number");
    }
}

//FUNCTION: Gets the number fom
function getNumberInput(id) {
    let inputNumber = $(id).value;
    if ((inputNumber = parseInt(inputNumber))) {
        if (inputNumber > Number.MAX_SAFE_INTEGER) {
            console.log("BIG");
            throw (new Error("NumberTooBig"));
        } else if (inputNumber < (Number.MAX_SAFE_INTEGER*-1)) {
            throw (new Error("NumberTooSmall"));
        }
    } else {
        throw (new Error("NotANumber"));
    }
    return inputNumber;
}
