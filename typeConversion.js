let value;

let num1 = 12
let num2 = 30

// ---Different Values to a String---
value = String(num1)
value = String(2 + 2)
value = String(true)
value = String([1,2,3,4,5,6])
console.log(value);

// ===String to a number===
value = Number('1242')
value = parseInt('65743')
value = parseFloat('65743.997')

value = parseInt(null)  // returns NaN

console.log(value);