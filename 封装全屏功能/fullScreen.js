/**
 *
 * @param {*} names 函数名数组
 * @param {*} target 对象
 * @returns 某个函数名字
 */
const getPropertyName = (names, target) => {
  return names.find((fucName) => fucName in target);
};

//  进入全屏
const enterFullScreenName = getPropertyName(
  [
    "requestFullscreen",
    "mozRequestFullScreen",
    "webkitRequestFullscreen",
    "msRequestFullscreen",
  ],
  document.documentElement
);
export function enter(element) {
  enterFullScreenName && element[enterFullScreenName]();
}
// 退出全屏
const exitFullScreenName = getPropertyName(
  [
    "exitFullscreen",
    "mozCancelFullScreen",
    "webkitExitFullscreen",
    "msExitFullscreen",
  ],
  document
);
export function exit() {
  exitFullScreenName && document[exitFullScreenName]();
}
// 某个元素是否处于全屏
const fullEleName = getPropertyName(
  [
    "fullscreenElement",
    "mozFullScreenElement",
    "webkitFullscreenElement",
    "msFullscreenElement",
  ],
  document
);
export function fullEle() {
  return document[fullEleName] || null;
}

export function isFull() {
  return !!fullEle();
}

//全屏切换
export function toggle(ele) {
  if (!ele) {
    throw new Error("缺少全屏元素");
  } else {
    isFull() ? exit() : enter(ele);
  }
}
