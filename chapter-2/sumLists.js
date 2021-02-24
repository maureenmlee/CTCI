// 2.5 Sum Lists: You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.
// EXAMPLE
// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2).That is, 617 + 295. Output: 2 -> 1 -> 9.That is, 912.
// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above problem. EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).That is, 617 + 295. Output: 9 -> 1 -> 2.That is, 912.


function sumLists(head1, head2) {
  const sum1 = [];
  const sum2 = [];
  //create a variable to store a new linked list with the sums
  //start from tail of the first head and add values to the first sum
  //start from tail of the second head and add values to the second sum
  let current1 = head1;
  let tai11 = null;
  let prev1 = null;
  while (current1) {
    sum1.unshift(current1.value)
    current1 = current.next
    // if (head1.next === null) { //end of the linked list
    //   sum1.push(tail1.value);
    //   tail1.
    //   let next = current1.next;
    //   current1.next = prev1;
    //   prev1 = current1;
    //   current1 = next;
  }

  while (current2) {
    sum2.unshift(current2.value)
    current2 = current.next
  }
  //loop through the arrays to create a string of numbers
  for (let i = 0; i < sum1.length; i++) {

  }

  //convert the string to a number

  //add numbers together
  //return number

}


function prettyPrint(head) {
  if (!head) {
    return '';
  }

  var node = head;
  var values = '';

  while (node) {
    values += node.value;
    values += ', ';
    node = node.next;
  }
  console.log(values);
}

prettyPrint(testHead1);


var testHead1 = { value: 7, next: null };
var node2 = { value: 1, next: null };
var node3 = { value: 6, next: null };
// var node4 = { value: 15, next: null };

testHead1.next = node2;
node2.next = node3;
// node3.next = node4;

var testHead2 = { value: 5, next: null };
var node22 = { value: 9, next: null };
var node32 = { value: 2, next: null };
// var node4 = { value: 15, next: null };

testHead2.next = node22;
node22.next = node32;
// node3.next = node4;


console.log(testHead1);
console.log(testHead2);


prettyPrint(testHead1);
prettyPrint(testHead2);
sumLists(testHead1, testHead2);
prettyPrint(testHead1);



/**
 * Linked Lists (How to skip duplicate nodes)
 * Stacks (How to validate parentheses)
 * Maps

 Feel free to give me a ring - 404-259-7896
'/
\]]poi00i898i9i98i8io5r5trrtf4rere43433e'
 */



// 2.5 Sum Lists: You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.
// EXAMPLE
// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2).That is, 617 + 295. Output: 2 -> 1 -> 9.That is, 912.

// 1. Given LL, can I print # it represents  //  (7 -> 1 -> 6) => 617
// 2. Given two LL, can I print out the summation of those two numbers
// 3. Create LL based on number


// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above problem. EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).That is, 617 + 295. Output: 9 -> 1 -> 2.That is, 912.


function sumLists(head1, head2) {
  const firstNumber = deserializeNumber(head1); // deserializeNumber solves problem 1
  const secondNumber = deserializeNumber(head2);
  const sum = firstNumber + secondNumber;
  return linkedListCreation(sum);
}

function deserializeNumber(head) {
  let numString = '';
  let current = head;

  while (current) {
    numString = current.value + numString;
    current = current.next;
  }
  return parseInt(numString);
}

function linkedListCreation(num) {
  let stringNum = num.toString();
  const result = {'value': stringNum[stringNum.length - 1], 'next': null} //head: 2
  let current = head; //head = 2

  for (var i = stringNum.length - 2; i >= 0; i--) {
    let obj = {};
    obj.value = stringNum[i];
    obj.next = null;
    // after wards 1
    current.next = obj; //head: {value: 2, next={value 1: next:null}}, current: 2
    current = current.next; // current: 1, head: 2
    //current 9, head: 2 (after second iteration)
  }
  return result;
}

var head1 = {'value': 7, 'next': null}
var node2 = {'value': 1, 'next': null}
var node3 = {'value': 6, 'next': null}

head1.next = node2;
node2.next = node3;

var head2 = {'value': 5, 'next': null}
var node4 = {'value': 9, 'next': null}
var node5 = {'value': 2, 'next': null}

head2.next = node4;
node4.next = node5;



console.log(sumLists(head1, head2))
