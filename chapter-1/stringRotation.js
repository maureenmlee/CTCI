// 1.9 Assume you have a method is Substring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g.,"waterbottle"is a rotation of"erbottlewat")

//i = 2 strings
//o = boolean (true or false if the s2 is a substring of s1)
//ec?
//c?

function isSubstring(str1, str2) {
  var doubleString = str1 + str1;
  if (doubleString.includes(str2)) {
    return true;
  }
  return false;
}

console.log(isSubstring("waterbottle", "erbottlewat")) // true;
console.log(isSubstring("hello", "lohel")) // true;
console.log(isSubstring("water", "teraw")) // false
console.log(isSubstring("water", "terae")) // false

