/*
 * @Description:
 * @Autor: sy
 * @Date: 2023-11-21 14:45:43
 * @LastEditors: sy
 * @LastEditTime: 2023-11-21 18:32:59
 */
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
class MyPromise {
  // 私有属性
  #state = "pending";
  #result = undefined;
  #handlers = [];
  constructor(excutor) {
    const resolve = (data) => {
      this.#changeState(FULFILLED, data);
    };
    const reject = (error) => {
      this.#changeState(REJECTED, error);
    };
    try {
      excutor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  #changeState(newState, newResult) {
    if (this.#state !== PENDING) return;
    this.#state = newState;
    this.#result = newResult;
    this.#run();
  }
  // 是否是Promise
  #isPromiseLink() {
    return false;
  }
  // 将函数运行到微队列
  #runMicroTask(callback) {
    setTimeout(callback, 0);
  }
  #runOne(callback, resolve, reject) {
    this.#runMicroTask(() => {
      if (typeof callback !== "function") {
        const settled = this.#result === FULFILLED ? resolve : reject;
        settled(this.#result);
        return;
      }
      try {
        const data = callback(this.#result);
        if (this.#isPromiseLink(data)) {
          data.then(resolve, reject);
        } else {
          resolve(data);
        }
      } catch (e) {
        reject(e);
      }
    });
  }

  #run() {
    if (this.#state === PENDING) return;
    while (this.#handlers.length) {
      const { onFulfilled, onRejected, resolve, reject } =
        this.#handlers.shift();
      if (this.#state === FULFILLED) {
        if (onFulfilled instanceof Function) {
          onFulfilled(this.#result);
        } else {
          resolve(this.#result);
        }
        this.#runOne(onFulfilled, resolve, reject);
      } else {
        if (onRejected instanceof Function) {
          onRejected(this.#result);
        } else {
          reject(this.#result);
        }
        this.#runOne(onRejected, resolve, reject);
      }
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this.#handlers.push({
        onFulfilled,
        onRejected,
        resolve,
        reject,
      });
      this.#run();
    });
  }
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("11");
    // throw new Error("error"); // 异步错误不会影响promise的状态
  }, 1000);
});
p.then(
  (res) => {
    console.log(res, "success");
  },
  (err) => {
    console.log(err, "err");
  }
);
