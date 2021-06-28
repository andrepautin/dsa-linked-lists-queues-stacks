const Queue = require("./queues");

describe("isEmpty", function() {
  it("returns true if queue is empty", function() {
    let queue1 = new Queue();
    expect(queue1.isEmpty()).toBe(true);

    queue1.enqueue(5);
    queue1.dequeue();
    expect(queue1.isEmpty()).toBe(true);
  });

  it ("returns false if there are items in queue", function() {
    let queue1 = new Queue([5]);
    expect(queue1.isEmpty()).toBe(false);
    
    queue1.dequeue();
    queue1.enqueue(10);
    expect(queue1.isEmpty()).toBe(false);
  })
});

describe("peek", function() {
  it("returns first item in the queue", function() {
    let queue2 = new Queue([5, 10]);
    expect(queue2.peek()).toBe(5);
  });

  it("should not return if queue is empty", function() {
    let queue2 = new Queue([5, 10]);
    expect(queue2.peek()).toBe(5);

    queue2.dequeue();
    queue2.dequeue();
    expect(function(){queue2.peek()}).toThrow(new Error("Cannot peek at empty queue!"))
  });
});

describe("enqueue", function() {
  it("appends node and increments length", function() {
    let queue3 = new Queue();

    queue3.enqueue(5);
    expect(queue3.length).toBe(1);
    expect(queue3.head.val).toBe(5);
    expect(queue3.tail.val).toBe(5);

    queue3.enqueue(10);
    expect(queue3.length).toBe(2);
    expect(queue3.head.val).toBe(5);
    expect(queue3.head.next.val).toBe(10);
    expect(queue3.tail.val).toBe(10);

    queue3.enqueue(15);
    expect(queue3.length).toBe(3);
    expect(queue3.head.val).toBe(5);
    expect(queue3.head.next.next.val).toBe(15);
    expect(queue3.tail.val).toBe(15);
  });
});

describe("dequeue", function() {
  it("removes node at start and decrements length", function() {
    let queue4 = new Queue([5, 10]);

    expect(queue4.dequeue()).toBe(5);
    expect(queue4.tail.val).toBe(10);
    expect(queue4.length).toBe(1);

    expect(queue4.dequeue()).toBe(10);
    expect(queue4.tail).toBe(null);
    expect(queue4.head).toBe(null);
    expect(queue4.length).toBe(0);
  });
});