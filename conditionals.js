/*let isUserLoggedIn = false

// verify password
//if passwords matched
isUserLoggedIn = true

if (isUserLoggedIn) {
    console.log('Welcome')
} else {
    console.log('Please log in!');
}


let num = 99

if (num >= 0){
    console.log('Positive Number');

    if (num > 100){
        console.log(num);
        console.log('Number is greater then 100');
    } else {
        console.log('Number is NOT greater then 100');
    }
    
} else {
    console.log('Negative Number');
}


Abraham E Tavarez
  10:57 AM
let isUserLoggedIn = false

// verify password
//if passwords matched
isUserLoggedIn = true

if (isUserLoggedIn) {
    console.log('Welcome')
} else {
    console.log('Please log in!');
}


let num = 99

if (num >= 0){
    console.log('Positive Number');

    if (num > 100){
        console.log(num);
        console.log('Number is greater then 100');
    } else {
        console.log('Number is NOT greater then 100');
    }
    
} else {
    console.log('Negative Number');
}
*/
/*let grade = 54
if (grade >= 90){
    console.log('A');
}

if (grade >= 80){
    if (grade <= 89){
        console.log('B');
    }
}

if (grade >= 70){
    if (grade <= 79){
        console.log('C');
    }
}

if (grade >= 55){
    if (grade <= 69){
        console.log('D');
    }
}

else {
    console.log('Fail');
}*/

/*
let grade = 75
if (grade >= 90){
    console.log('A');
} else if (grade >= 80 && grade <= 89){
    console.log('B');    
} else if (grade >= 70 && grade <= 79){
    console.log('C');
} else if (grade >= 55 && grade <= 69){
    console.log('D');
} else if (grade < 55){
    console.log('F')
}
*/
// Math Object
/* 
let age = Math.floor(Math.random() * 30) 
console.log(age)

if (age >= 18 && age < 21){
    console.log('older than 18');
} else if (age < 18){
    console.log('younger than 18');
} else if (age >= 21){
    console.log('adult');
}
*/
/* Ternary Operator Below*/
// Ternary Op

/*const userInput = 'user83'

const dbUserName = 'user83'

const loggedInUser = userInput === dbUserName ? `Hello ${dbUserName}` : `Please check your username`

console.log(loggedInUser);*/

// ---exercise 1 conditionals---
/*let num = 10
// num = -1
if (num >= 0){
   console.log('positive');
} else {
   console.log('negative');
}*/

// ---exercise 2 conditionals---
/*let age = 35
if(age >= 18){
    console.log('Access Granted')
} else {
    console.log('Access Denied')
}*/

// ---exercise 3 conditionals---
/*let num = 150
if(num >= 0 && num > 100){
    console.log("Positive & Greater than 100.");    
}
if(num >= 0 && num < 100){
    console.log('Positive but less than 100.');
}
if(num < 0){
    console.log('Number is negative');
}*/

// ---exercise 5 conditionals---
/*let grade = 98
if (grade >= 90){
    console.log('A');
} else if (grade >= 80 && grade <= 89){
    console.log('B');    
} else if (grade >= 70 && grade <= 79){
    console.log('C');
} else if (grade >= 55 && grade <= 69){
    console.log('D');
} else if (grade < 55){
    console.log('F')
}
*/
// ---Challenge conditionals---
// Change the number of numToCheck to test your code
// let numToCheck = 0;

// Write your code below
/*let numToCheck = -1;
if(numToCheck >= 1){
    console.log('Number is positive');
}
if(numToCheck = 0){
    console.log('Number is Zero');
}
else if(numToCheck < 0){
    console.log('Negative');
}
*/
let home = ''
let whereImFrom = home || 'Indian Woods'
console.log(`I am from a small place called ${whereImFrom}.`);