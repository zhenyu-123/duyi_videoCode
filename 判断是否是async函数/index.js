// 判断传入的函数是否标记了async
function isAsync(fn) {
  //   return fn.constructor.name === "AsyncFunction";
  return fn[Symbol.toStringTag] === "AsyncFunction";
}

console.log(isAsync(() => {}));
console.log(isAsync(async () => {}));
