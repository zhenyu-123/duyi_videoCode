// 写一个ts中的函数重载
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: any, y: any): any {
  return x + y;
}

// 重载函数的使用
console.log(add(1, 2));
console.log(add("1", "2"));
 