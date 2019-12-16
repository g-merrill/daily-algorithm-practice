// https://leetcode.com/problems/merge-two-sorted-lists/

// initialize reusable variables
let i, node, nodeValue;

const mergeTwoLists = function(l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  let nodeArray = [];
  let node;
  let l1HasVals = true;
  let l2HasVals = true;
  while (l1HasVals || l2HasVals) {
    if (!l1HasVals) {
      node = new ListNode(l2.val);
      if (l2.next) {
        l2 = l2.next;
      } else {
        l2HasVals = false;
      }
    } else if (!l2HasVals) {
      node = new ListNode(l1.val);
      if (l1.next) {
        l1 = l1.next;
      } else {
        l1HasVals = false;
      }
    } else {
      if (l1.val <= l2.val) {
        node = new ListNode(l1.val);
        if (l1.next) {
          l1 = l1.next;
        } else {
          l1HasVals = false;
        }
      } else {
        node = new ListNode(l2.val);
        if (l2.next) {
          l2 = l2.next;
        } else {
          l2HasVals = false;
        }
      }
    }
    nodeArray.push(node);
    if (nodeArray.length > 1) {
      nodeArray[nodeArray.length - 2].next = nodeArray[nodeArray.length - 1];
    }
  }
  return nodeArray[0];
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let listOneNodeArray = [];
for (i = 0; i < 8; i++) {
  if (i === 0) {
    node = new ListNode(0);
    listOneNodeArray.push(node);
  } else {
    nodeValue = Math.floor(Math.random() * 3) + listOneNodeArray[i - 1].val;
    node = new ListNode(nodeValue);
    listOneNodeArray.push(node);
    listOneNodeArray[i - 1].next = listOneNodeArray[i];
  }
}

let listTwoNodeArray = [];
for (i = 0; i < 5; i++) {
  if (i === 0) {
    node = new ListNode(0);
    listTwoNodeArray.push(node);
  } else {
    nodeValue = Math.floor(Math.random() * 3) + listTwoNodeArray[i - 1].val;
    node = new ListNode(nodeValue);
    listTwoNodeArray.push(node);
    listTwoNodeArray[i - 1].next = listTwoNodeArray[i];
  }
}

const listOne = listOneNodeArray[0];
const listTwo = listTwoNodeArray[0];
console.log(mergeTwoLists(listOne, listTwo));