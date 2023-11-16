/*
 * @Description:
 * @Autor: sy
 * @Date: 2023-11-13 10:50:02
 * @LastEditors: sy
 * @LastEditTime: 2023-11-13 11:15:08
 */
/**
 * 异步执行一个函数
 * 如果可以，尽量将函数放到微队列中
 * @param {Function} func 无参、无返回
 */
function asyncRun(func) {
  // 为了兼容低版本浏览器
  if (typeof Promise !== "undefined") {
    Promise.resolve().then(func); //让promise异步执行
  } else if (typeof MutationObserver !== "undefined") {
    let observer = new MutationObserver(func); //放到微队列中
    const textNode = document.createTextNode("0");
    observer.observer(textNode, {
      CharacterData: true,
    });
    textNode.data = "1";
  } else {
    setTimeout(func);
  }
}
// JS高级——浏览器运行前端项目的原理及流程
// https://sichangyuan.blog.csdn.net/article/details/128428923?spm=1001.2101.3001.6650.5&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-5-128428923-blog-130396808.235%5Ev38%5Epc_relevant_default_base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-5-128428923-blog-130396808.235%5Ev38%5Epc_relevant_default_base&utm_relevant_index=10

// MutationObserver
// https://blog.csdn.net/time_____/article/details/130508329

asyncRun(() => {
  console.log("1");
  console.log("2");
  console.log("3");
});
