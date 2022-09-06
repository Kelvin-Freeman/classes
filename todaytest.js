/*myName = () => {
console.log('Kelvin')
}
myName()


function finalRun(mySentence) {
return mySentence
}
let thisStatement = finalRun('I\'m done with trucking!')
console.log(thisStatement)


function myDay(day1) {
    return day1
}
let myNewDay = myDay('day1')
console.log(myNewDay)


// ===function===
/*function theDay(todayWeather) {
    return todayWeather
}
let theForecast = theDay('the weather is nice')
console.log(theForecast)*/


 /*for (let i = 0; i < 10; i++)
 console.log(i) //prints vertically

let myTime = ''

let i = 0;

do {
    myTime = myTime + i;
    i++
}   while (i < 10);
console.log(myTime)  //prints horizontally
*/

/*function peachTree() {
    for (let i = 2; i < 5; i % 2)
console.log("the peach tree has old limbs. ")
}
peachTree()*/

// let result 
// if(9%2===1 || 33%2===0){
//     console.log("we true")
//   }else{
//     console.log("false as ever");
//   }
 

/*let addThis = 0
let sum = 0
while(addThis < 9){
    addThis++
    console.log(addThis);
    }*/
 

    /*for (let i = 0; i <= 10; i+=2) {
        if (i % 2 === 0)
        console.log(i);
    }*/
    
 
 


 /*for(let i = 0; i<1; i++){
    let i = "#"
       console.log(i) 
    }
    for(let i = 0; i<1; i++){
        let i = "##"
           console.log(i) 
        }
        for(let i = 0; i<1; i++){
            let i = "###"
               console.log(i) 
            }
            for(let i = 0; i<1; i++){
                let i = "#####"
                   console.log(i) 
                }
                for(let i = 0; i<1; i++){
                    let i = "######"
                       console.log(i) 
                    }*/
/*function myName(myNewName) {
    return myNewName
}
let oldName = myName('Kelvin')
console.log(oldName)*/

/*const myNum = (num) => num * 2 

let myResult = myNum(4)
console.log(myResult);

myFun = () => {
console.log('Jane');
}
myFun()*/

//====Assignment Exercise 1====

function computeArea(width, height) {
return width * height
}
let newArea = computeArea(2, 5)
console.log('The area of a rectangle with a width of 2 and a height of 5 is', (newArea) + ' square units')

// ====Assignment Exercise 2====

const myPlanet = function planetHasWater(planet) {
if (planet === 'Earth' || planet==='Mars') {
    return('True')    
}else {
    return('False');
}

}

// sayHello()

// Function Definition
function sayHello(){
    console.log('Hello...')
}

// 
const greeting = function(){
    console.log("Hello World!");
}
// greeting()

// function execution
function multiply(num1, num2){
  return num1 * num2
}


const result = multiply(2, 10)
// console.log(result)

// Arrow Functions
const multiplyByTwo = num => num * 2

const multiply2 = (num1, num2) => num1 * num2

const multiply3 = (num1, num2) => {
    return num1 * num2
}

console.log(multiply3(2,2));

const result1 = multiplyByTwo(4)

console.log(result1);




// ===== Exercise 1

function computeArea(width, height){
    console.log('its running!');
    const area = width * height
    return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`
}

// computeArea(5, 3)
// console.log(computeArea()) // show you the value
// const rect1 = computeArea(5,2) // store the value
// console.log(rect1);

// ===== Exercise 2

const planetHasWater = function(planet){
    planet = planet.toLowerCase() // re-assign the value of planet with all lower case
    
    if (planet === 'earth' || planet === 'mars'){
        return true;
    } else {
        return false
    }
}

// const planetEarth = planetHasWater('Mars')
// console.log(planetEarth);

/// ===== Exe3

function addTwo(num){
    return num + 2
}

console.log(addTwo(8))

/// ===== Exe 4
function sayHello(name = 'Guest'){
    return `Hi, ${name}`
}

console.log( sayHello() ); // using the default value
console.log( sayHello('Rob') ); // passing an argument
console.log( sayHello('Tom'));

    
// ==== Challenges

// reverse string
// apple
function reverseString(str){
    let reverseStr = '' // pace holder for the reversed string

    // loop for as long as we have characters in the string
    for(let i = str.length -1; i >= 0; i--){
        reverseStr += str[i] // concat the current character to the variable
    }

    return reverseStr
}

console.log( reverseString('banana'));


// ==== capitalize string
// apple
//banana
const capitalizeString = str => str[0].toUpperCase() + str.substring(1)

function capitalizeStr(word){
    return word[0].toUpperCase() + word.substring(1)
}

console.log(capitalizeString('apple'))
console.log(capitalizeStr('banana'))*/


let movies = ['Carlitos Way', 'Bronx Tale', 'Ali'];
console.log(movies.at(1) )

const top10 = []
top10.push('Scarface')
console.log(top10);



// Primitive Types 'string', booleans, numbers
let num1 = 20
const num2 = num1

num1 = 100

// console.log(num1); //100
// console.log(num2); // 20

// Array declaration

const colors = ["red", 'blue','green']

const users = ['abe', 'alex', 'anna']

const movies = ['Bad boys', 'transformers', 'Casino', 'Caddyshack', 'Interstellar', 'Scarface']

console.log( movies.length );
console.log( movies.at(-1) );
console.log( movies[movies.length - 1] );

const top10 = []

top10.push('Royal 007') // push an element to the end of the array
top10.push(movies[2])

top10.unshift('Star Wars') // unshift add an element to the beginning of the array

console.log(top10);

const movieOfTheYear = top10.shift()
const lastMovie = top10.pop()

console.log(movieOfTheYear);
console.log(lastMovie);

console.log(top10);

/ Primitive Types 'string', booleans, numbers
let num1 = 20
const num2 = num1

num1 = 100

// console.log(num1); //100
// console.log(num2); // 20

// Reference Types

const arr1 = ['Jan', 'Feb', 'March', 'April']
const arr2 = arr1

arr1.unshift('Sep')
const firstTwoMonths = arr2.slice(0, 2)

// firstTwoMonths.push('Dec')

console.log(firstTwoMonths);

console.log(arr1);
console.log(arr2);