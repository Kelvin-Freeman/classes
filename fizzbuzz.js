/*Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions:

For numbers divisible by 3, print "Fizz" instead of the number
For numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz",
for numbers that are divisible by both 3 and 5.
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/


// Fizzbuzz challenge
for(let i = 1; i <= 100; i++)  {

    let output = '';

    switch (true) {
        
        case (i % 5 === 0 && i % 3 === 0):
            output += "FizzBuzz";
            break; 
        case (i % 3 === 0):
            output += "Fizz";
            break;
        case (i % 5 === 0):
            output += "Buzz";
            break;
            default:
                output += i;
                break;
    }
    console.log(i, output);
} 

