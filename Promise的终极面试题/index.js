Promise.resolve()
  .then(() => {
    console.log("0");
    return Promise.resolve("0-4");
  })
  .then((res) => {
    console.log(res);
  });
//   这段代码是JavaScript中的Promise链。它首先创建一个已解决的Promise，然后在.then()方法中添加两个处理程序。这两个处理程序将按照它们添加的顺序执行。

//   这是代码的详细解释：

//   1. Promise.resolve()创建一个已解决的Promise。这意味着这个Promise的状态是“已完成”，并且它的结果值是undefined。

//   2. .then(() => {...})添加了一个处理程序，当Promise解决时会执行这个处理程序。在这个处理程序中，它首先打印出"0"，然后返回一个新的已解决的Promise，其结果值为"0-4"。

//   3. .then((res) => {...})添加了第二个处理程序，当上一个处理程序的Promise解决时会执行这个处理程序。这个处理程序接收上一个Promise的结果值（即"0-4"）作为参数，并打印出这个值。

console.log("_____________________________________");
Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(4);
  })
  .then(() => {
    console.log(5);
  });
