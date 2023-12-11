// LRU： 最近最久未使用
// LRU介绍：https://zhuanlan.zhihu.com/p/524500466?utm_id=0
// Map和Set https://blog.csdn.net/sunhuaqiang1/article/details/115405460
class LRUCache {
  #length;
  #data;
  constructor(lenght) {
    this.#length = lenght; // 存储长度
    this.data = new Map(); // 存储数据
  }
  // 存储数据，通过键值对的方式
  set(key, value) {
    const data = this.data;
    if (data.has(key)) {
      data.delete(key);
    }
    data.set(key, value);

    // 如果超出了容量，则需要删除最久的数据
    if (data.size > this.#length) {
      const delKey = data.keys().next().value;
      data.delete(delKey);
    }
  }
  // 获取数据
  get(key) {
    const data = this.data;
    // 未找到
    if (!data.has(key)) {
      return null;
    }
    const value = data.get(key); // 获取元素
    data.delete(key); // 删除元素
    data.set(key, value); // 重新插入元素
  }
}
const lruCache = new LRUCache(5); // 最大缓存 5
lruCache.set("name", "小猪课堂");
lruCache.set("age", 22);
lruCache.set("sex", "男");
lruCache.set("height", 176);
lruCache.set("weight", "100");
console.log(lruCache);


lruCache.set('grade', '10000');
console.log(lruCache);

// const  m = new Map([
//     ['a',1],
//     ['b',2]
// ]);

// console.log(m);  //Map { 'a' => 1, 'b' => 2 }
// console.log(m.size);  //2
