const Node = (val, next) => {
  let node = {}
  node.val = val, node.next = next;
  return node;
}
const LinkedList = _ => {
  let obj = {}
// list-size
  obj.size = 0;
// list-pop
  obj.pop = _ => {
    let pop = obj.head || null;
    obj.head = pop ? pop.next : null;
    if (obj.hasOwnProperty('size')) obj.size--;
    return pop ? pop.val : undefined;
  }
// list-peek
  obj.peek = _ => obj.head ? obj.head.val : undefined;
// list-isEmpty
  obj.isEmpty = _ => {
    if (obj.hasOwnProperty('head')) return !obj.head
    if (obj.hasOwnProperty('tail')) return !obj.tail
    if (obj.hasOwnProperty('size')) return !obj.size
}
// list-enqueue
  obj.enqueue = node => {
    node = Node(node, null);
    if (obj.tail) obj.tail.next = node;
    obj.tail = node;
    if (obj.hasOwnProperty('size')) obj.size++;
    if (obj.hasOwnProperty('head') && !obj.head) obj.head = node;
  }
// list-dequeue
  obj.dequeue = _ => {
    let dequeue = obj.head;
    if(dequeue) { 
      obj.head = dequeue.next;
      if(obj.hasOwnProperty('size')) obj.size--;
      return dequeue.val;
    }
    return undefined;
  }
  return obj
}
module.exports = { LinkedList };
