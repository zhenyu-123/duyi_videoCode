const cache = new WeakMap();
function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }
  // value 是对象
  if (cache.has(value)) {
    return cache.get(value);
  }

  const result = Array.isArray(value) ? [] : {};
  Object.setPrototypeOf(result, Object.getPrototypeOf(value)); //拷贝原型
  cache.set(value, result);

  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      // 对象自有属性，不包含原型链
      result[key] = deepClone(value[key]);
    }
  }
  return result;
}

const obj = {
  a: 1,
  b: {
    bb: 2,
    bb1: 3,
  },
  c: [1, 2, 3, 4],
};

class Test {
  constructor() {
    this.a = 1;
    this.b = {
      bb: 2,
      bb1: 3,
    };
    this.c = [1, 2, 3, 4];
  }
  e() {
    console.log("e");
  }
}
Test.prototype.d = 1;
let obj1 = new Test();

let obj2 = deepClone(obj1);
console.log("obj2", obj2);
