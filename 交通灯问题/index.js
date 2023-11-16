const serail = ["Red", "Yellow", "Green"];

function delay(duration = 3000) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
class Signal {
  // 判断下一个信号灯的颜色（状态）
  get next() {
    return serail[(serail.indexOf(this.sig) + 1) % serail.length]; // 取下一灯
    /*
    这是一个使用indexOf方法和%操作符的代码段，用于在数组中循环遍历索引。

首先，使用indexOf方法查找当前元素在数组中的索引。indexOf方法会返回指定值在数组中首次出现的索引，如果没有找到该值，则返回-1。
然后，将索引加1，并将结果对数组长度取模。这将确保索引在数组的范围内（即在0到数组长度-1之间）。
最后，使用%操作符将索引映射回数组中正确的索引位置。例如，如果数组长度为5，索引为3，那么(3 + 1) % 5的结果将为4，这是数组中下一个元素的索引。
总之，这段代码的作用是在数组中循环遍历索引，并在每次迭代中确保索引在数组的范围内。
    */
  }
  // 是否需要切换 ,返回时间 second
  get remain() {
    let diff = this.end - Date.now();
    if (diff < 0) {
      diff = 0;
    }
    return diff / 1000;
  }
  constructor(option) {
    this.sig = option.init;
    this.times = option.times;
    this.eventMap = new Map();
    this.eventMap.set("change", new Set()); //Set对象在JavaScript中用于存储唯一的值。
    this.eventMap.set("tick", new Set()); //Set对象在JavaScript中用于存储唯一的值。
    this.setTime();
    this.exchange();
  }
  // 绑定事件
  on(event, handler) {
    this.eventMap.get(event).add(handler); // 得到对应的队列，加到队列中
  }
  // 删除事件
  off(event, handler) {
    this.eventMap.get(event).delete(handler);
  }
  // 触发事件
  emit(event) {
    this.eventMap.get(event).forEach((handler) => {
      handler.call(this, this);
    });
  }
  // 信号灯切换
  async exchange() {
    await 1; //把后边的代码放入微队列  //await关键字后面跟一个表达式1，表示等待异步操作完成
    if (this.remain > 0) {
      // 不需要切换
      // console.log(this.remain);
      this.emit("tick");
      // 等待一秒钟
      await delay(1000);
    } else {
      this.sig = this.next;
      this.setTime();
      // console.log("切换到：", this.sig);
      this.emit("change");
    }
    this.exchange();
  }
  // 设置时间，当前灯的开始时间 和 结束时间
  setTime() {
    this.start = Date.now();
    const time = this.times[serail.indexOf(this.sig)];
    this.end = this.start + time * 1000;
  }
}

const s = new Signal({
  init: "Red", //当前处于的颜色
  times: [5, 3, 1], // 信号的持续时间
});

s.on("tick", (e) => {
  console.log(e.sig, Math.round(e.remain));
  //Red 4 // 没有执行5，原因是是异步的，所以是4；this.emit("tick");有触发，但没有监听器
});
