/*const myName = {
    firstName:'Jacob',
    lastName: 4000
}

myName.middle = 'Andrew' //this is how you can add a key to the object from the outside
myName.firstName = 'Michael' //this is how you can update the object key
console.log(myName.lastName);
myName.lastName += 1000
console.log(myName.lastName);

const user = {
    name: 'Abe',
    age: 30,
    isLoggedIn: true,
    balance: 200
} 

console.log(typeof user.balance);
user.balance *= 100
console.log(typeof user.balance);
console.log(user);

const car = {
    color: 'blue',
    hp: 4000,
    year: 1989,
    isElectric: false,
    doors: '2'
}

car.engine = 'V20' // setting a new property called engine
// console.log(car.isElectric);
// console.log(car.color);
// console.log(car);

car.engine = 'V28' // updating the property engine
car.color = 'Hot Pink'
// console.log(car);*/

//* ===============Exercise 1: ===========================
// Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.


// You can set these object properties to whatever values you want,
// as long as name is a string, legs and tails are numbers, and friends is an array.

//Only change code below this line
const myDog = {
    name: 'Fido',
    legs: 4,
    tails: 1,
    friends: ['Midnight', 'Carter', 'Moonlight']
}
console.log(myDog);





//* ===============Exercise 2: ===========================
//* Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
 // Assign each variable its corresponding value from the object
 //Only change code below this line

    console.log(testObj.hat);   //Change this line
    console.log(testObj.shirt); //Change this line
                





//* ===============Exercise 3: ===========================
//* Read the values of the properties 'an entree' and 'the drink' of testObj2 using bracket notation and assign them to two new variables entreeValue and drinkValue respectively.

  // Setup
  const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };

// Only change code below this line
const entreeValue = testObj2['entreeValue'] =  'hamburger'
const drinkValue = testObj2['drinkValue'] = 'water'
console.log(entreeValue);
console.log(drinkValue);



//* ===============Exercise 4: ===========================
//* Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.

// Setup
const testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
 
  // Only change code below this line
  const playerNumber = 16 // Change this line
  const player = 'Montana';   // Change this line

  console.log(testObj3[16]);




  //* ===============Exercise 5: ===========================
  // Update the myDog2 object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.

  // Setup
const myDog2 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
 
  // Only change code below this line
myDog2.name = 'Happy Coder'
console.log(myDog2.name);



//* ===============Exercise 6: ===========================
//Add a bark property to myDo3g and set it to a dog sound, such as "woof". You may use either dot or bracket notation.

const myDog3 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };

// Only change code below this line
myDog3.dogSound = 'woof'
console.log(myDog3);





//* ===============Exercise 7: ===========================
//Delete the tails property from myDog4. You may use either dot or bracket notation.

// Setup
/*const myDog4 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
 
// Only change code below this line

delete myDog4.tails
console.log(myDog4)*/



//* ===============Exercise 8: ===========================
// Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.

/*const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    
  ];

// Only change code below this line
const newAlbum = {
    "artist2": "Outkast",
    "title2": "ATLiens",
    "release_year2": 1996,
    "formats2": [
        "cd",
        "casette",
        "vinyl"
    ],
    "platinum": true

}
myMusic.push(newAlbum)
console.log(myMusic);*/

    







//* ===============Exercise 9: ===========================
//   Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.

const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
 
// Only change code below this line

  const gloveBoxContents = myStorage.car.inside['glove box']
  console.log(myStorage);










//* ===============Exercise 10: FINAL BOSS ===========================
// Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.


const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },

    
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
 

// Only change code below this line
const secondTree = myPlants[1].list[1]
console.log(secondTree);