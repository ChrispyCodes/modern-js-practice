class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  get len() {
    return this.count;
  }
  push(item) {
    this.items.push(item);
    this.count = this.count + 1;
  }
  pop() {
    if (this.count > 0) {
      this.count = this.count - 1;
    }
    return this.items.pop();
  }
  peek() {
    return this.items.slice(-1)[0];
  }
}
