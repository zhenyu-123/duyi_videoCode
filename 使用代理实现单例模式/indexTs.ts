/*
 * @Description:
 * @Autor: sy
 * @Date: 2023-11-10 16:35:57
 * @LastEditors: sy
 * @LastEditTime: 2023-11-10 16:38:47
 */
// 单例模式
// 单例类：被限制只能有一个实例的类。
// 全局访问点：类的客户端通过这个点来访问单例实例。
class ton {
  private constructor() {
    console.log("实例创建");
  }
  static instance: any = null;
  static getInstance() {
    if (!this.instance) {
      this.instance = new ton();
    }
    return this.instance;
  }
}

// let t = new ton(); //类“ton”的构造函数是私有的，仅可在类声明中访问
let t1 = ton.getInstance();
