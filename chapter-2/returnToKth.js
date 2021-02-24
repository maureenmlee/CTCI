// 2.2 Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

function kthToLast(head, k) {
  if (!head) {
    return null;
  }

  var newNode = head;

  while (node) {
    while (newNode.next !== k)
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

prettyPrint(testHead1);


var testHead1 = { value: 15, next: null };
var node2 = { value: 13, next: null };
var node3 = { value: 13, next: null };
var node4 = { value: 17, next: null };

testHead1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(testHead1);