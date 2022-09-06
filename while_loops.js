//the below code is a WHILE LOOP.
let i = 0
while(i < 10) {
  console.log("message");
  i++;
}

//The below code is a FOR LOOP.
for(let i = 0; i < 10; i++)
console.log(i)  //--- notice how this for loop is saying the same thing as the while loop. The while loop is simply adding the word while and the console.log("message") to the equation. It is saying while i < 10, run the word message while i is incrementing to 10.*/
for(let i = 1; i < 10; i+=2)
console.log(i)

for(let i = 0; i < 10; i+=2)
console.log(i) 

/*let num = 32;
num += 17
console.log(num) // ----problem 1

let num = 25;
num -= 14
console.log(num) // ---problem 2

let num = 92
num *= 11
console.log(num)*/ // ---problem 3

/*let num = 64
num /= 8
console.log(num)*/ // ---problem 4


// ----While Loop----
let count = 0
let isNotDoneCounting = false

while(isNotDoneCounting || count < 10){
    console.log(`The count is: ${count}`)

    if (count === 5){
        isNotDoneCounting = false
    }
    count++
}

// ----Game While Loop----
let lives = 3
let time = 10

while(lives > 0 && time > 0){
    console.log('Playing the game....')
    console.log(`Time left ${time} and Lives left: ${lives}`);

    if (time % 2 === 0){
        console.log('You Lose one live!');
        lives--
    } 
    
    if (lives === 0) {
        console.log('Game Over');
    }

    time--
}

console.log('Go to Main Menu!');

// ===Do While Loop=== They run at least once!

let k = 10

do {
    console.log('Do While');
    i--
}
while (k > 0);







