const btn = document.querySelector(".btn");
const arrs = Array.from({ length: 100000 }, (_, i) => i + 1);
btn.onclick = function () {
  const taskHandler = (item, i) => {
    const li = document.createElement("li");
    li.textContent = item;
    document.querySelector("ul").appendChild(li);
  };
  performChunk(arrs, taskHandler);
  //   for (const i of datas) {
  //     const li = document.createElement("li");
  //     li.textContent = i;
  //     document.querySelector("ul").appendChild(li);
  //   }
};

// 分时函数
function performChunk(datas, taskHandler) {
  if (datas.length === 0) return;
  let i = 0;
  function _run() {
    if (i >= datas.length) return;
    // 利用渲染帧的剩余时间
    requestIdleCallback((idle) => {
      // idle.timeRemaining() 渲染帧的剩余时间
      while (idle.timeRemaining() > 0 && i < datas.length) {
        // 执行任务
        taskHandler(datas[i], i);
        i++;
      }
      _run();
    });
  }
  _run();
}
