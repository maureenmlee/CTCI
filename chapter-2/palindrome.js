// 2.6 Palindrome: Implement a function to check if a linked list is a palindrome.

function palindrome(head) {
  var numsArray = [];
  var newNode = head;
  while(newNode) {
    numsArray.push(newNode);
    newNode = newNode.next
    console.log(newNode);
  }

  var lastNode = numsArray.pop();
  while(newNode) {
    if (newNode.value !== lastNode) {
      return false;
    }
    return true;
  }

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

// prettyPrint(testHead1);


var testHead1 = { value: 15, next: null };
var node2 = { value: 13, next: null };
var node3 = { value: 13, next: null };
var node4 = { value: 15, next: null };

testHead1.next = node2;
node2.next = node3;
node3.next = node4;

// console.log(testHead1);


// prettyPrint(testHead1);
palindrome(testHead1); // modifying testHead1
// prettyPrint(testHead1);