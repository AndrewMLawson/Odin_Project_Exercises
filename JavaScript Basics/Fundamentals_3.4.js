// Write a function called lastLetter that takes a string and returns the very last letter of that string:

let test = "abc, xyz"

function lastLetter(string){
    let stringLength = string.length;
    return string[stringLength - 1]
}

console.log(lastLetter(test))