const audioEle = document.querySelector("audio");
const cvs = document.querySelector("canvas");
const ctx = cvs.getContext("2d");

// 初始化canvas尺寸
function initCanvas() {
  cvs.width = window.innerWidth * devicePixelRatio; //设备像素比
  cvs.height = (window.innerHeight / 2) * devicePixelRatio;
}
initCanvas();

let isInit = false;
let dataArray, analyser;

audioEle.onplay = function () {
  if (isInit) {
    return;
  }
  // 初始化
  const audCtx = new AudioContext(); //创建音频上下文
  const source = audCtx.createMediaElementSource(audioEle); // 创建音频源
  analyser = audCtx.createAnalyser(); // 创建音频分析器
  analyser.offtSize = 1024; // 默认2048 必须为2的N次幂
  // 创建数组，用于接收分析器节点的分析数据
  dataArray = new Uint8Array(analyser.frequencyBinCount);
  source.connect(analyser); // 音频源连接音频分析器
  analyser.connect(audCtx.destination); // 音频分析器连接音频输出
  isInit = true;
};

// 把分析出的波形绘制到canvas上
function draw() {
  requestAnimationFrame(draw);
  // 1 清空画布
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  if (!isInit) {
    return;
  }
  // 让分析器节点分析出数据到数组中
  analyser.getByteFrequencyData(dataArray);
  const len = dataArray.length / 2.5;
  const barwidth = cvs.width / len / 2;
  ctx.fillStyle = "#7BC5F7";
  for (let i = 0; i < len; i++) {
    const data = dataArray[i]; // < 256
    const barHeight = (data / 255) * cvs.height;
    const x1 = i * barwidth + cvs.width / 2;
    const x2 = cvs.width / 2 - (i + 1) * barwidth;
    const y = cvs.height - barHeight;
    ctx.fillRect(x1, y, barwidth - 2, barHeight);
    ctx.fillRect(x2, y, barwidth - 2, barHeight);
  }
}
draw();
