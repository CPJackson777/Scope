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