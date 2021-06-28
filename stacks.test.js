const Stack = require("./stacks");

describe("isEmpty", function() {
  it("returns true if stack is empty", function() {
    let stack1 = new Stack();
    expect(stack1.isEmpty()).toBe(true);
  });
});

describe("peek", function() {
  it("throws error if list is empty", function() {
    let stack2 = new Stack();
    expect(function(){stack2.peek()}).toThrow(new Error("Cannot peek at empty stack"))
  });

  it("can return the value of first item in the stack", function() {
    let stack2 = new Stack();
    stack2.push(5);
    stack2.push(10);
    expect(stack2.peek()).toBe(10);
  });
});

describe("push", function() {
  it("adds to the top of the stack and increments length", function() {
    let stack3 = new Stack();
    expect(stack3.length).toBe(0);

    stack3.push(5);
    expect(stack3.length).toBe(1);
    expect(stack3.top.val).toBe(5);
    
    stack3.push(10);
    expect(stack3.length).toBe(2);
    expect(stack3.top.val).toBe(10);
  });
});

describe("pop", function() {
  it("removes from the top of the stack and decrements length", function() {
    let stack4 = new Stack([5, 10]);
    expect(stack4.length).toBe(2);
    stack4.pop();
    expect(stack4.length).toBe(1);
    expect(stack4.top.val).toBe(5);
    expect(stack4.pop()).toBe(5);
  });
});