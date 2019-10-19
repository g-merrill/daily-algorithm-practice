// merging two linked lists
const list1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
};
const list2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
};
var mergeTwoLists = function(l1, l2) {
    class Node { 
        constructor(val) { 
            this.val = val; 
            this.next = null;
        } 
    } 
    class LinkedList { 
        constructor() { 
            this.val = null; 
            this.size = 0; 
        } 
        add(val) { 
            var node = new Node(val); 
            var current; 
            if (this.val == null) {
                this.val = node; 
            } else { 
                current = this.val;
                while (current.next) { 
                    current = current.next; 
                }
                current.next = node; 
            }
            this.size++; 
        } 
        removeElement(val) { 
            var current = this.val; 
            var prev = null; 
            while (current != null) { 
                if (current.val === val) { 
                    if (prev == null) { 
                        this.val = current.next; 
                    } else { 
                        prev.next = current.next; 
                    }
                    this.size--; 
                    return current.val; 
                }
                prev = current; 
                current = current.next; 
            } 
            return -1; 
        } 
        isEmpty() {
            return this.size == 0;
        }
    } 
    let l1LL = new LinkedList();
    let l2LL = new LinkedList();
    let l1copy = l1;
    let l2copy = l2;
    let l1length = 0;
    while (l1.next) {
        l1length++;
        l1 = l1.next;
    }
    l1length++;
    let l2length = 0;
    while (l2.next) {
        l2length++;
        l2 = l2.next;
    }
    l2length++;  
    for (let i = 0; i < l1length; i++) {
        l1LL.add(l1copy.val);
        l1copy = l1copy.next;
    }
    for (let j = 0; j < l2length; j++) {
        l2LL.add(l2copy.val);
        l2copy = l2copy.next;
    }
    l1 = l1LL;
    l2 = l2LL;
    let l3 = new LinkedList();
    while (!l1.isEmpty() && !l2.isEmpty()) {
        if (l1.val.val <= l2.val.val) {
            let value = l1.val.val;
            l3.add(value);
            l1.removeElement(value);
        } else {
            let value = l2.val.val;
            l3.add(value);
            l2.removeElement(value);
        }
    }
    if (l1.isEmpty()) {
        while (!l2.isEmpty()) {
            let value = l2.val.val;
            l3.add(value);
            l2.removeElement(value);
        }
    } else {
        while (!l1.isEmpty()) {
            let value = l1.val.val;
            l3.add(value);
            l1.removeElement(value);
        }
    }
    return l3;  
}

console.log(mergeTwoLists(list1, list2));
