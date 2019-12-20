const arr1 = [5,4,3,2,1] // 3
const arr2 = [6,5,4,3,2,1] // 4
const listMaker = array => {
  return array.reduce((lastNode, currentValue) => {
    const thisNode = { val: currentValue }
    thisNode.next = lastNode.hasOwnProperty('val') ? lastNode : null; 
    return thisNode;
  }, {})
}
const list1 = listMaker(arr1);
const list2 = listMaker(arr2);

var middleNode = function(head) {
  let firstPointer = head;
  let secondPointer = head;
  while (secondPointer.next) {
    secondPointer = secondPointer.next;
    firstPointer = firstPointer.next;
    if (secondPointer.next) {
      secondPointer = secondPointer.next;
    }
  }
  return firstPointer;
};

console.log(middleNode(list1));
console.log(middleNode(list2));