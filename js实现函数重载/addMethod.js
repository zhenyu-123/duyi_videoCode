/**
 *
 * @param {*} object 传入对象
 * @param {*} methodName 传入方法名字
 * @param {*} method 所要执行的回调函数
 */
function addMethod(object, methodName, method) {
  // 保存原有的方法
  const old = object[methodName];
  // 重新定义新的方法
  object[methodName] = function (...args) {
    // 如果传入参数的数量与目标方法一致
    if (args.length === method.length) {
      // 调用目标方法并返回结果
      return method.apply(this, args);
      // 如果传入参数的数量与原有方法一致
    } else if (typeof old === "function") {
      // 调用原有方法并返回结果
      return old.apply(this, args);
    }
  };
}

module.exports = addMethod;
