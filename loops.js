/*let total = 0 //global variable

for (let i = 0; i < 10; i += 3) {
    console.log(i);
    total += i
    console.log(`the total is: ${total}`)
}*/
/*const message = 'Hello'
console.log(message.length);
for( let i = 0; i < message.length; i++){
    console.log(message[i])
}*/

// getting the last character of a string
/*const message = 'Hello World'
console.log(message.length);

for (let i = 0; i < message.length; i++){
    console.log(message[i])
}

for (let i = message.length -1; i >= 0; i--){
    console.log(message[i])
}

console.log(message[message.length -1])*/

/*for(let i = 3; i <= 10; i++){
    
    if(i === 5){
        console.log('before continue');
        continue
        console.log('after cont');
    } else if (i === 5){
        break
    }
    
    // console.log(`${i} * 2 = ${i * 2}`);
    console.log(`${i}`);
}*/
// --Reversing a string--
/*const word = 'hello'
let reversed = ''

for (let i = word.length -1; i >= 0; i--) {
    reversed += word[i]
    console.log(reversed);
}*/
/*for(let i = 10; i > 0; i--)
console.log(i)*/

/*for(let i = 3; i <= 60; i += 6 )
console.log(i)*/

/*for(let i = 0; i <= 11; i += 2)
console.log(i % 11)*/






/*for(let i = 0; i < 10; i+=2)  //---outputs even to 10
console.log(i) 

for(let i = 10; i > 0; i--)   //---counts down from 10 to 1
console.log(i)

for(let i = 6; i <= 60; i += 3 )
console.log(i)                 //---multiples of 3

for(let i = 0; i <= 11; i += 2)
console.log(i % 11)  */         //---using remainder operator

let age = 18;
let drink = age >= 21 ? "Beer" : "Juice";
console.log(drink);

//  print "hello world" backwards For Loop---

let message = "hello world"

for  (let i = 0; i < message.length; i++){
    console.log(message[i])
}

// -----For of Loop-----
for (character of message){
    console.log(c);
}