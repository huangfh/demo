//场景：非连续存储单元
class Node {
  constructor(value) {
    this.vaule = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }
  //队尾添加
  append(value) {
    const node = new Node(value);
    const tailNode = this.tail;

    if (!this.head) {
      this.head = node
    }
    tailNode.next = node;
    this.tail = node;
    this.length += 1;

  }
  prepend(value) {
    const node = new Node(value);
    const headNode = this.head;
    node.next = headNode;
    this.head = node;
    this.length += 1;
    return node;
  }
  insert(index, value) {
    // 位置超过链表长度
    if (index > this.length) {
      return null
    }
    //插入队首
    if (index === 0) {
      return this.prepend(value);
    }
    const node = new Node(value);
    //位置等于链表长度，直接插入队尾
    if (index === this.length) {
      const postNode = this.tail;
      postNode.next = node;
      this.tail = node;
    }
    // 其他位置 需要遍历链表
    let prenode = null;
    for (const i = 0; i < index - 1; i++) {
      prenode = prenode.next || this.head;
    }
    const postNode = prenode.next;
    prenode.next = node;
    node.next = postNode;
    this.length += 1;

    return node

  }
  lookup(index) {

  }
  remove(index) {

  }
  resert() {// return head index
    if (!this.length) return null;
    let preNode = this.head;
    this.tail = preNode;
    for (const i = 0; i < this.length; i++) {
      let node = preNode.next;
      node.next = preNode;
      preNode = node;
    }
    this.head = preNode
    return this.head;


  }
}

