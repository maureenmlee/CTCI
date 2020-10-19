//1.2 given 2 strings, write a method to decide if one is a permutation of the other

//i: 2 strings
//o: boolean
//ec:
//

function checkPermutations(str1, str2) {
  //check to see if length matches, if not, return false
  var hash1 = {};
  var hash2 = {};
  if (str1.length !== str2.length) {
    return false;
  } else {
    for (var i = 0; i < str1.length; i++) {
      if (hash1[str1[i]] === undefined || hash1[str1[i]] === null) {
        hash1[str1[i]] = 1;
      } else {
        hash1[str1[i]] += 1;
      }
    } for (var j = 0; j < str2.length; j++) {
      if (hash2[str2[j]] === undefined || hash2[str2[j]] === null) {
        hash2[str2[j]] = 1;
      } else {
        hash2[str2[j]] += 1;
      }
    }
  }
  // console.log(hash1);
  // console.log(hash2);
  for (var key in hash1) {
    if (hash1[key] !== hash2[key]) {
      return false;
    }
  }
  return true;
}

console.log(checkPermutations("so", "os")); //true
console.log(checkPermutations("abc", "bca")); //true
console.log(checkPermutations("phone", "phons")); //false