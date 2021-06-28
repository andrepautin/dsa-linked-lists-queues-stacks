/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
    }
    if (this.tail !== null) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    // empty linked list case
    if (this.head === null) {
      throw new Error("Cannot remove from an empty list!");
    }
    // one node case
    if (this.head.next === null) {
      let returnVal = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return returnVal;
    }
    // multiple nodes case
    let currNode = this.head;
    while (currNode.next.next !== null) {
      currNode = currNode.next;
    }
    let returnVal = currNode.next.val;
    currNode.next = null;
    this.tail = currNode;
    this.length--;
    return returnVal;
  }

  /** shift(): return & remove first item. */

  shift() {
    // empty linked list case
    if (this.head === null) {
      throw new Error("Cannot remove from an empty list!");
    }
    // one node case
    let returnVal = this.head.val;
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
      this.length--;
      return returnVal;
    }
    this.head = this.head.next;
    this.length--;
    return returnVal;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }
    let currIdx = 0;
    let currNode = this.head;
    while (currIdx !== idx) {
      currIdx++;
      currNode = currNode.next;
    }
    return currNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }
    if (idx === this.length - 1) {
      this.tail.val = val;
    }
    let currIdx = 0;
    let currNode = this.head;
    while (currIdx !== idx) {
      currIdx++;
      currNode = currNode.next;
    }
    currNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid index");
    }
    if (idx === 0) {
      this.unshift(val);
    }
    if (idx === this.length) {
      this.push(val);
    }

    let newNode = new Node(val);
    // TODO
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // TODO
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    }
    let sum = 0;
    let currNode = this.head;
    while (currNode !== null) {
      sum += currNode.val;
      currNode = currNode.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
