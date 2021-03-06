// 运用你所掌握的数据结构，设计和实现一个 LRU 缓存机制 。实现 LRUCache 类：

// LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。
// 当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get size() {
    return this.cache.size;
  }

  get(key) {
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    return -1;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size === this.capacity) {
      this.cache.delete([...this.cache.keys()][0]);
    }
    this.cache.set(key, value);
  }
}

const cache = new LRUCache(4);
cache.put("a", 1);
cache.put("b", 2);
cache.put("c", 3);
cache.put("d", 4);
cache.put("a", 5);
console.log(cache);
