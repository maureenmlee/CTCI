//is unique. implement an algo to determine if a string has all unique characters

function isUnique(word) {
  if (word === null) {
  return false;
  }
  var mySet = new Set();

  for (var i = 0; i < word.length; i++) {
    // console.log(JSON.stringify(mySet));
    if (mySet.has(word[i]) === false) {
      mySet.add(word[i]);
    } else {
      return false;
    }
  }
  return true;
}

console.log(isUnique("hello"));
console.log(isUnique("phone"));
console.log(isUnique(""));
console.log(isUnique(null));

//alternate answer

// function isUnique(word) {
//   var hash = {};
//   if (word === null) {
//   return false;
//   }
//   for (var i = 0; i < word.length; i++) {
//     if (hash[word[i]] === undefined || hash[word[i]] === null) {
//       hash[word[i]] = 1;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isUnique("hello"));
// console.log(isUnique("phone"));
// console.log(isUnique(""));
// console.log(isUnique(null));
