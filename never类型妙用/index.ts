// x 是任意类型，但不能是日期
type BanDate<T> = T extends Date ? never : T;

type BanType<T, E> = T extends E ? never : T; // (给一个传入的类型T，以及去除的类型E)


function func<T>(x: BanType<T, Date>) {
  console.log(x);
}
func(new Date());
func(1);
func("red");
// 在函数名后面加上<T>是为了指定函数的泛型参数。泛型参数允许我们在函数定义中使用类型变量，以便在函数体内使用不同的类型。在这种情况下，<T>表示函数func接受一个泛型参数T。
