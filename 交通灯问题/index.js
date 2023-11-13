const serail = ["Red", "Yellow", "Green"];
class Signal {
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
  constructor(option) {
    this.sig = option.init;
    this.times = option.times;
    this.setTime();
  }

  setTime() {
    this.start = Date.now();
    const time = this.times[serail.indexOf(this.sig)];
    this.end = this.start + time * 1000;
  }
}

const s = new Signal({
  init: "Red", //当前处于的颜色
  times: [10, 23, 3], // 信号的持续时间
});
console.log(s, s.next);
