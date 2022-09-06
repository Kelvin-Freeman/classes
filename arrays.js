/*const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];

// ADD CODE HERE
const fourthItem = horror[3]

// Write a console.log statement below to check your work!
console.log(fourthItem); */            //===Array Challenge 1===




/*const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];
netflixShows.push("Tiger King")
// ADD CODE HERE


// Write a console.log statement below to check your work!
console.log(netflixShows); */       //=====Array Challenge 2=====



/*const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];
for (let i = 0; i < synonyms.length; i++) {
    greetings.push(synonyms[i]);
}

console.log(`Have a ${synonyms} day!`);*/

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE


// 2. 
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE

/*const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE
for(let i = 0; i < 5; i++)
if (increaseByTwo[i]){
    increaseByTwo[i] += 2
}

console.log(increaseByTwo) 

// Uncomment the line below to check your work!
console.log(increaseByTwo);*/ // -> should print [3, 4, 5, 6, 7];

// ===========

const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
// ADD CODE HERE
for (let i = 0; i < timesTenIfOverFive.length; i++) {
    if (timesTenIfOverFive[i] >= 5) {
        timesTenIfOverFive[i] *= 10
    }
}

// Uncomment the line below to check your work!
 console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]

