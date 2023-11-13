// 1
// export function singleton(className) {
//     // 创建一个函数作为装饰器，用于生成单例对象
//     let instance = null;
//     // 初始化单例对象，初始值为null
//     return class {
//       // 返回一个子类
//       constructor(...args) {
//         // 构造函数
//         if (!instance) {
//           // 如果单例对象不存在
//           instance = new className(...args);
//           // 根据传入的参数创建一个新的实例
//         }
//         return instance;
//         // 返回单例对象
//       }
//     };
//     // 装饰器函数本身
//   }

// 2
export function singleton(className) {
  let instance = null;
  return new Proxy(className, {
    construct(target, args) {
      if (!instance) {
        instance = new target(...args);
      }
      return instance;
    },
  });
}
