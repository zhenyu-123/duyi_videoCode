var o = (function () {
  var obj = {
    a: "1",
    b: "2",
  };
  //  防止修改obj 方法 2
  //   Object.setPrototypeOf(obj,null)// 将原型链上的方法都删除
  return {
    get: function (key) {
      //  防止修改obj 方法 1
      //   if (obj.hasOwnProperty(k)) {
      //     return obj[key];
      //   } else {
      //     return undefined;
      //   }

      return obj[key];
    },
  };
})();
// 如何在不改变上面代码的情况下修改obj对象

// 那个对象在访问属性c,this指向该对象
Object.defineProperty(Object.prototype, "c", {
  get() {
    return this;
  },
});
// 修改obj对象
// obj.c = "3";
let newObj = o.get("c"); // 获取到obj 对象
newObj.c = "3"; // 修改obj
newObj.a = "11"; // 修改obj 的 a属性
console.log(o.get("a"));
