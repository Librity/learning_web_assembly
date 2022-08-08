// node stack.js

class Stack {
  stack = [];

  constructor() {}

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  echo(value) {
    this.push(value);

    return this.pop();
  }

  sAdd() {
    const a = this.pop();
    const b = this.pop();

    this.push(a + b);
  }

  sSub() {
    const a = this.pop();
    const b = this.pop();

    this.push(a - b);
  }

  sMult() {
    const a = this.pop();
    const b = this.pop();

    this.push(a * b);
  }

  sDiv() {
    const a = this.pop();
    const b = this.pop();

    this.push(a / b);
  }

  add(a, b) {
    this.push(a);
    this.push(b);

    this.sAdd();

    return this.pop();
  }

  square(value) {
    this.push(value);
    this.push(value);

    this.sMult();

    return this.pop();
  }
}

const stack = new Stack();

console.log(stack.echo(42));
console.log(stack.square(42));
console.log(stack.add(2, 4));
