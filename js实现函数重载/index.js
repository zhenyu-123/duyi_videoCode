// js 实现函数重载
const addMethod = require("./addMethod.js");
const searcher = {};
// 定义方法,
addMethod(searcher, "find", () => {
  console.log("查询全部学生");
});
addMethod(searcher, "find", (name) => {
  console.log(`查询名字叫${name}的学生`);
});
addMethod(searcher, "find", (name, age) => {
  console.log(`查询名字叫${name}的学生,年龄${age}`);
});
// 调用
searcher.find();
searcher.find("李明", 12);
