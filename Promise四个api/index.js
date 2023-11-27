// Promise.all、Promise.race、Promise.resolve、Promise.reject、Promise.finally、Promise.any、Promise.allSettled
// Promise.all 全部执行成功
// Promise.allSettled 全部执行完成（不管成功或者失败）
// Promise.race 最快执行的一个Promise（不管成功或者失败）
// Promise.any 最快执行的一个Promise（成功）
Promise.any([
    new Promise((resolve, reject) => setTimeout(reject, 500, 'Java是世界上最好的编程语言！')),
    new Promise((resolve, reject) => setTimeout(resolve, 1000, 'JavaScript是世界上最好的编程语言！')),
    new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Php是世界上最好的编程语言！')),
    ])
    .then(value => console.log(value))  // JavaScript是世界上最好的编程语言！
    .catch (err => console.log(err));

    //还有这种情况
Promise.any([
	Promise.reject('Error 1'),
	Promise.reject('Error 2'),
	Promise.reject('Error 3')
])
.then(value => console.log(value))
.catch (err => console.log(err))
//输出AggregateError: All promises were rejected