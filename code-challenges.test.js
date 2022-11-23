// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// describe('removeandreShuffle', () => {
//     const expected = ["purple", "blue"];
//     it('matches even if received contains additional elements', () => {
//       expect(["purple", "blue", "green", "yellow", "pink"]).toEqual(expect.arrayContaining(colors1));
//     });
//     it('does not match if received does not contain expected elements', () => {
//       expect(["yellow", "blue", "pink", "green"]).not.toEqual(expect.arrayContaining(colors1));
//     });
//   });

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// //      Test Suites: 1 passed, 1 total
// //      Tests:       2 passed, 2 total

// // b) Create the function that makes the test pass.
// // Input: [array] of words
// // Output: first word removed and words returned reshuffled
// // PsuedoCode:
// //  Create a function that takes in an array of words.
// const removeandreShuffle = (arr) => {
// // Create a for loop to iterate through the array of words
//     for (let i = 0; i < arr.length; i++) {
// // Create a variable to save word in current index.
//         let holdWord = arr[1]
// // Create a variable and assign a random generator to to identify word
// // in array.
//         let randomIndex = Math.floor(Math.random(arr.length))
// // Word saved in array index is replaced with word from 
// // random word generator.
//         arr[i] = arr[randomIndex]
// // Replacement word will be returned new array.
//         arr[randomIndex] = holdWord
//     }
// // Return first word removed and words returned reshuffled.
//     return arr
// }
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

///     it("contains up votes and down votes and returns the end tally", () => {
//       expect(voteTally(votes1)).toEqual("11")
//     })
//   })

//   // Create a function and have test, run the test and practice
//   // the red step in the red-green-refactor.  
// const voteTally = (obj) => {
//     return Object.values(obj).parseInt()
//     console.log(values)
//    }

// // Test Suites: 1 failed, 1 total
// // Tests:       1 failed, 1 total

describe("endtallyVotes", () => {
  it("contains up votes and down votes and returns the end tally", () => {
    expect(endtallyVotes(votes1)).toEqual(11)
  })
})

const votes1 = {upVotes: 13, downVotes: 2}
// // Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

// 23 Nov.-- Mistake found...
const endtallyVotes = (object) => {
  // Create a function, that takes an object
  return object.upVotes - object.downVotes
  // oject can define own behavior, called instance methods. Called through type
  // conversion and you don't have to call yourself in your code.
}


// b) Create the function that makes the test pass.
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

//Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// describe("returnOne", () => {
//     it("returns one array with no duplicate values", () => {
//       expect(dataArray1).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
//     })
//   })

// const dataArray1 = ["array", "object", "number", "string", "Boolean"]
// // const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// // Test Suites: 1 failed, 1 total
// // Tests:       1 failed, 1 total


// // b) Create the function that makes the test pass.
// const returnOne = (array1, array2) => {
//     // Create a function that takes in two arrays as arguments.
//     return array12 = [...array1, ...array2] 
//     // inserting values from array1 and 2 into one array using spread  
//     // operator
// } 

    