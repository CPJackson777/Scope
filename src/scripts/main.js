console.log('Soon, you will look back on your current confusion towards frontend developement and realize how far you have come in your understanding of coding because it will be easy to you.')


// Some software developers were contracted to build some code, but they weren't quite clear yet on how scope works. Your job is to fix their code to stop all the errors from being thrown.

// C is for Cookie

// Here is the incorrect code...
// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let y = 1

// for (let x = 1; y < cookies.length; x++) {
//     const currentCookie = cookies[y]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }


// Corrected Code: I deleted the let y = 1 line as it served no purpose. Then I changed the y in the loop to an i.
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]



for (let i = 0; i < cookies.length; i++) {
    const currentCookie = cookies[i]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}



// // Conjunction Function

// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
// }

// conjunction("Master", "Card")
// console.log(conjoinedWord)

let conjoinedWord = ""
// declared empty variable in order to access it outside the function

const conjunction = function (firstWord, secondWord) {
    conjoinedWord = `${firstWord} ${secondWord}`
}
// I declared the function name, gave it paramenters, and then told it what I want it to 

conjunction("Master", "Card")
console.log(conjoinedWord)
// I called the function, passed in arguments, and then told it to console log the result


// Alternate / easier solution...
// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
//     console.log(conjoinedWord)
// }

// conjunction("Master", "Card")


// // Mod Squad

// {
//     const ModSquad = {
//         "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"]
//         "series": {
//             "start": "1968",
//             "end": "1973"
//         }
//     }

//     const HTMLRepresentation = `<h1>The Mod Squad</h1>`

//     ModSquad.members.forEach(member => {
//         const HTMLRepresentation += `<div>${member}</div>`
//     })
// }

// document.querySelector(".show-info").innerHTML = HTMLRepresentation


// Corrected Code...

const ModSquad = {
    members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
    series: {
        start: "1968",
        end: "1973"
    }
}
// Took quotations off of the object key because it's not a string. Also, added a comma at the end of the array to separate the keys.

let HTMLRepresentation = `<h1>The Mod Squad</h1>`
for (let i = 0; i < ModSquad.members.length; i++) {
    HTMLRepresentation += `<div>${ModSquad.members[i]}</div>`
}
// Changed const to let before HTMLRepresentation so that I could add the array list after/below it with each array index being on a separate line once the created for loop is activated. 

document.querySelector(".show-info").innerHTML = HTMLRepresentation
// Had to remove the outside curly braces to give HTMLRepresentation access to its definition.


// // Simon Says

// There are two separate scoping issues in this code. Remember, for and if are their own block scopes and if something is declared with let or const then that variable only exists in that scope.

// const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

// for (let k = 0; k < locations.length; k++) {
//     const currentLocation = locations[k]

//     if (currentLocation[0] > 2) {
//         const invalidLocation = true
//     }

//     if (invalidLocation) {
//         console.log("This location is invalid")
//     }
// }

// /*
//     Since k is used as the loop counter, it will be the
//     total number of locations, not the invalid ones. You
//     need to fix this somehow.
// */
// console.log(`There were ${k} invalid locations`)


// Corrected Code...
const locations = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3]]

let theseAreInvalid = 0
// Created var to equal a number

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

if (currentLocation[0] > 2) {
    const invalidLocation = true;
    theseAreInvalid += 1;
} else {
    console.log("This location is valid")
}
}
// Added my created var to include a += 1 in order to count how many times we got an invalid location. Also, added an else statement to tell computer what to console log if [0] is not greater than 2.

console.log(`There were ${theseAreInvalid} invalid locations`)