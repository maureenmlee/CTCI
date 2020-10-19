//1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin- drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat". "atco cta". etc.)

// tcat aoc

//check to make sure that the word is a palindrome

//notes: can only have 1 odd?
//rest of the letters must be even
//count the number of characters in the str


//first solution
//helper function
function isOddCountGreaterThan1(allCounts) {
  var oddCounter = 0;
  for (var j = 0; j < allCounts.length; j++) {
    if (allCounts[j] % 2 === 1) {
      oddCounter++;
    }
  }
  console.log(oddCounter);
  if (oddCounter > 1) {
    return false;
  }
  return true;
}

function palindromePermutationMap(str) {
  var palindromeMap = new Map();
  var lCStr = str.toLowerCase();
  var counter = 1;

  for (var i = 0; i < lCStr.length; i++) {
    if (lCStr[i] === ' ') {
      continue;
    } else {
      var count = palindromeMap.get(lCStr[i]) || 0; // obj[lcStr[i]]
      palindromeMap.set(lCStr[i], count + 1);
    }
  }
  var values = [...palindromeMap.values()];
  return isOddCountGreaterThan1(values);
}

console.log(palindromePermutationMap("Tact Coa")) // true;
console.log(palindromePermutationMap("ana")) // true;
console.log(palindromePermutationMap("bbioll")) // false;

//alt solution
// function palindromePermutation(str) {
//   var obj = {}
//   var lCStr = str.toLowerCase();
//   var counter = 1;
//   for (var i = 0; i < lCStr.length; i++) {
//     if (lCStr[i] != " " && obj[lCStr[i]] === undefined) {
//       obj[lCStr[i]] = 1;
//     } else {
//       obj[lCStr[i]] += 1;
//     }
//   }
//   //section below is just to get rid of the space
//   for (var key in obj) {
//     if (obj[key] === " ") {
//       delete obj[key];
//     }
//   }
//   // console.log("obj after deletion", obj)
//   var values = Object.values(obj);
//   // console.log(values);
//   var oddCounter = 0;
//   for (var j = 0; j < values.length; j++) {
//     if (values[j] % 2 === 1) {
//       oddCounter++;
//       // console.log("oddCounter", oddCounter)
//     }
//   }
//   if (oddCounter > 1) {
//     return false;
//   }
//   return true;
// }


// console.log(palindromePermutation("Tact Coa")) // true;
// console.log(palindromePermutation("ana")) // true;
// console.log(palindromePermutation("bbioll")) // false;


// function palindromePermutation(str) {
//   var palindromeMap = new Map();
//   var lCStr = str.toLowerCase();
//   var counter = 1;
//   for (var i = 0; i < lCStr.length; i++) {
//     if (!palindromeMap.has(lCStr[i]) && lCStr[i] !== ' ') {
//       palindromeMap.set(lCStr[i], counter);
//     } else {
//       palindromeMap.set(lCStr[i], counter++);
//     }
//   }
//   return palindromeMap;
// }