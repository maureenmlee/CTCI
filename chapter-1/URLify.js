//1.3 write a method to replace all spaces in astring with %20
//you may assume that the string has sufficent space at the end to hold the additional characters, and that you are given the true length of a strung.

//input "mr john smith"
//output mr%20jogn%20smith

function urlify(str, num) {
  var results = [];
  // console.log("stest")
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      results.push(str[i]);
      // console.log(results);
    } else if (str[i] === " " && str[i+1] !== " ") {
      results.push("%20");
      // console.log(results);
    }
  }
  // console.log(results);
  return results.join('');
}

console.log(urlify("mr john smith   ", 6));
console.log(urlify("my name is"));

var test = "mr john smith   "


//Q: is there a better way to do this with hashes?