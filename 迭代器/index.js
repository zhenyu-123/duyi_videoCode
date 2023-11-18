// 在ECMAScript6中，Iterator是被实现为一个对象，拥有next()和return()两个方法。
// Iterable是可迭代的，任何具有的[Symbol.iterator]方法的对象都是可迭代的，这个方法会返回一个Iterator实例。
// Iterator本质上是一个对象，拥有next和return两个方法。
// next()方法会返回一个对象，拥有value和done两个属性。value属性是每次迭代得到的值，done属性是布尔值，表示迭代是否结束。

/*******************************************例子1******************************************/
// 迭代器（Iterator）是用于遍历集合中的元素的对象。在JavaScript中，任何具有Symbol.iterator属性的对象都可以作为一个迭代器使用。
// 以下是一个使用迭代器遍历数组的示例：

const arr = [1, 2, 3, 4, 5];

// 使用Symbol.iterator遍历数组
const iterator = arr[Symbol.iterator]();
 
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
// 调用iterator.return()方法终止迭代
// console.log(iterator.return()); // { value: undefined, done: true }

// 代码解释：
// 在上述示例中，我们首先创建了一个数组arr，然后使用Symbol.iterator遍历该数组。在每次调用iterator.next()方法时，我们得到了数组中的下一个元素。最后，我们使用iterator.return()方法终止了迭代。

/*******************************************例子2******************************************/
// 除了数组之外，许多JavaScript内置对象也实现了Symbol.iterator属性，使得它们可以被迭代。例如，可以使用以下方式遍历字符串、Map、Set等对象：

// 遍历字符串
const str = "Hello, World!";
const iterator2 = str[Symbol.iterator]();
console.log(iterator2.next()); // { value: "H", done: false }
console.log(iterator2.next()); // { value: "e", done: false }
console.log(iterator2.next()); // { value: "l", done: false }
// ...

// 遍历Map
const map = new Map([
  [1, "One"],
  [2, "Two"],
  [3, "Three"],
]);
const iterator3 = map[Symbol.iterator]();
console.log(iterator3.next()); // { value: 1, value: "One" , done: false }
console.log(iterator3.next()); // { value: 2, value: "Two" , done: false }
console.log(iterator3.next()); // { value: 3, value: "Three" , done: false }
// ...

// 遍历Set
const set = new Set(["One", "Two", "Three"]);
const iterator4 = set[Symbol.iterator]();
console.log(iterator4.next()); // { value: "One", done: false }
console.log(iterator4.next()); // { value: "Two", done: false }
console.log(iterator4.next()); // { value: "Three", done: false }
// ...

// 代码解释
// 在上述示例中，我们使用Symbol.iterator遍历了字符串、Map和Set对象。在每次调用iterator.next()方法时，我们得到了对象的键值对或元素。

// 需要注意的是，使用Symbol.iterator属性遍历对象时，对象的迭代顺序是根据其迭代器生成的顺序，而不是对象内部属性的顺序。例如，在数组中添加元素的顺序和删除元素的顺序可能与迭代的顺序不同。
