/*
 * @Description:
 * @Autor: sy
 * @Date: 2023-11-27 15:11:09
 * @LastEditors: sy
 * @LastEditTime: 2023-11-27 15:12:33
 */
// 四种集合类型，WeakMap、WeakSet作为属性键的对象如果没有别的变量在引用它们，则会被回收释放掉。
// Sets

var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;

// Maps

var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;

//WeakMap

var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size === undefined;

// Weak Sets

var ws = new WeakSet();

ws.add({ data: 42 });

//Because the added object has no other references, it will not be held in the set
