import Node from "./classNode.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }
  append(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
  prepend(data) {
    let newNode = new Node(data);
    let oldHead = this.head;
    this.head = newNode;
    this.head.next = oldHead;
  }
  size() {
    let currentNode = this.head;
    let index = 0;

    while (currentNode) {
      index++;
      currentNode = currentNode.next;
    }
    return index;
  }
  tail(currentNode = this.head) {
    if (!currentNode) return this.head;
    if (!currentNode.next) return currentNode;
    return this.tail(currentNode.next);
  }
  at(index, currentNode = this.head, currentIndex = 0) {
    if (!currentNode) return false;
    if (currentIndex === index) return currentNode;
    // Make sure it's ++currentIndex, NOT currentIndex++, it needs to be incremented BEFORE being read
    return this.at(index, currentNode.next, ++currentIndex);
  }
  pop(currentNode = this.head) {
    if (!currentNode) return;
    if (!currentNode.next) {
      this.head = null;
      return;
    }
    if (!currentNode.next.next) {
      currentNode.next = null;
      return;
    }
    return this.pop(currentNode.next);
  }
  contains(searchData, currentNode = this.head) {
    if (!currentNode) return false;
    if (searchData === currentNode.data) return true;
    if (currentNode.next === null) return false;
    return this.contains(searchData, currentNode.next);
  }
  find(searchData, index = 0, currentNode = this.head) {
    if (!currentNode) return false;
    if (searchData === currentNode.data) return index;
    if (currentNode.next === null) return false;
    return this.find(searchData, ++index, currentNode.next);
  }
  toString(currentNode = this.head) {
    if (!currentNode) return null;
    if (!currentNode.next) return `${currentNode.data} --> null`;
    return `${currentNode.data} --> ${this.toString(currentNode.next)}`;
  }
  insertAt(insertData, searchIndex, index = 0, currentNode = this.head) {
    if (!currentNode) return;
    if (index > searchIndex) return;
    if (index === searchIndex - 1) {
      let newNode = new Node(insertData);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      return;
    }
    return this.insertAt(insertData, searchIndex, ++index, currentNode.next);
  }
  removeAt(searchIndex, index = 0, currentNode = this.head) {
    if (!currentNode) return;
    if (index > searchIndex) return;
    if (index === searchIndex - 1 && currentNode.next) {
      currentNode.next = currentNode.next.next;
      return;
    }
    return this.removeAt(searchIndex, ++index, currentNode.next);
  }
}
