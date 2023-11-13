// *****************************1***********************************
interface Point {
  x: number;
  y: number;
}

// 定义一个类型，他必须是Point的键之一
type keys = keyof Point;
// 使用keyof 可以遍历所有的键，相当于 type keys = 'x' | 'y'
const label: keys = "x";

// *****************************2***********************************
let cat = {
  name: "小猫",
  age: 2,
  color: "蓝色",
};

/**
 *
 * 获取对象中指定键的值
 * @param obj - 输入的对象
 * @param name - 指定的键名
 * @returns 对象中指定键的值
 * @template T - 对象的类型
 * @template K - 键名的类型
 */
function getValue<T extends object, K extends keyof T>(obj: T, name: K): T[K] {
  return obj[name];
}
//1、使用泛型约束 <T extends object, K extends keyof T>
//2、T是一个对象 K是对象中键的类型
//3、T[K] 返回值是对象中键的值

getValue(cat,'color')
