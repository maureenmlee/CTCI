// // 2.1
// // Remove Dups: Write code to remove duplicates from an unsorted linked list. FOLLOW UP
// // How would you solve this problem if a temporary buffer is not allowed?

// //pseudoclassical

// var UnsortedList = function (val, next) {
//   // this.head = head || null;
//   this.val = val;
//   this.next = next || null;
// };

// // UnsortedList.prototype.add = function () {
// //   var newNode = new UnsortedList();
// //   if (!head) {
// //     newNode = this.head;
// //   }
// //   //otherwise set added value to be the next value
// // }

// // UnsortedList.prototype.deleteDups = function() {

// // }


// // const list = new UnsortedList();
// // list.add(1);
// // list.add(5);
// // list.add(7);
// // list.add(1);
// // list.removeDup()


// let head = new UnsortedList(1);
// let tail = head;
// tail.next = new UnsortedList(2);
// tail = tail.next;
// tail.next = new UnsortedList(5);
// tail = tail.next;
// tail.next = new UnsortedList(6);
// tail = tail.next;
// tail.next = new UnsortedList(8);
// // tail = tail.next;

// console.log(tail, "tail");
// console.log(head, "head");
// console.log(head.next.next.next.val, "head")

// var testHead1 = { value: 15, next: null };
// var node2 = { value: 13, next: null };
// var node3 = { value: 13, next: null };

// testHead1.next = node2;
// node2.next = node3;

// console.log(testHead1);



// function removeDups(head) {
//   var node = head;
//   var hash = {}
//   if (!head) {
//     return head;
//   }

//   while (node.next !== null) {
//     if (hash[node.next.val] === undefined) {
//       hash[node.next.val] = 1;
//       if (hash[node.next.val] === 1) {
//         node.next = node.next.next;
//       }
//     }
//   }
//   return node;
// }

// console.log(removeDups([1, 2, 5, 1, 7, 2, 4, 2]));
// console.log(removeDups([2]));



// ----------------------------------------------
// class Node {
//   value: number;
//   next: Node;
// }

// **1** -> 1 -> **3**
// 1 -> 3

function removingDuplicatesFromUnsorted(head) {
  if (!head) {
    return head;
  }

  var node = head;
  var hash = {};
  var prev = null;


  while (node) {
    if (hash[node.value] === undefined) {
      hash[node.value] = 1;
    } else {
      // found a duplicate! // Time to 'ignore' it
      prev.next = node.next;
    }
    prev = node; // maybe we want this data later
    node = node.next;
  }
  return head;
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

var testHead1 = { value: 15, next: null };
var node2 = { value: 13, next: null };
var node3 = { value: 13, next: null };

testHead1.next = node2;
node2.next = node3;

// Test 1
prettyPrint(testHead1);
removingDuplicatesFromUnsorted(testHead1); // modifying testHead1
prettyPrint(testHead1);
