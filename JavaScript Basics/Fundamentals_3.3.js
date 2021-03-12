//Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
let test = "wElL HElLo tHerE"


function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize(test))
