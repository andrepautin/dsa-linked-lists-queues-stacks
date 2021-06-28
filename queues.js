class Node {
  val = null;

  constructor(val) {
    this.val = val;
  }
}

class Queue {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.enqueue(val);
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Cannot peek at empty queue!");
    }
    return this.head.val;
  }

  /** enqueue() adds item to the end of the queue */
  enqueue(val) {
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

  /** dequeue() removes and returns first item in the queue  */
  dequeue() {
    // empty queue case
    if (this.isEmpty()) {
      throw new Error("Cannot dequeue from empty list!");
    }
    // one item queue case
    let returnVal = this.head.val
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return returnVal;
    }
    this.head = this.head.next;
    this.length--;
    return returnVal;
  }
}

module.exports = Queue;