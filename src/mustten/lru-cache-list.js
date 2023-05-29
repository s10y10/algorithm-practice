class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(max) {
    this.max = max;
    this.keyMap = {};
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.head = this.head;
  }

  get(key) {}

  put(key, val) {}
}

const cache = new LRUCache(4);
cache.put('a', 1);
cache.put('b', 2);
cache.put('c', 3);
cache.put('d', 4);
cache.put('a', 5);
console.log(cache);
