class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

class Stack {
  top = null;
  length = 0;
  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Cannot peek at empty stack");
    }
    return this.top.val;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.top === null) {
      this.top = newNode;
    } else {
      let tempNode = this.top;
      this.top = newNode;
      this.top.next = tempNode;
    }
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Cannot pop from empty stack");
    }
    let temp = this.top;
    this.top = this.top.next;
    this.length--;
    return temp.val;
  }
}

module.exports = Stack;