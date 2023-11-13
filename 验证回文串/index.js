/*
 * @Description:
 * @Autor: sy
 * @Date: 2023-11-08 14:14:58
 * @LastEditors: sy
 * @LastEditTime: 2023-11-09 11:09:03
 */
/**
 * 判断一个字符串是否是回文
 * @param {string} str - 待判断的字符串
 * @returns {boolean} - 如果是回文字符串则返回true，否则返回false
 */
function isPalindrome(str) {
  // 去除字符串中的非字母数字字符
  str = str.replace(/[^a-zA-Z0-9]/g, "");
  // 正向遍历字符串
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    // 如果正向遍历到的两个字符不相等，则不是回文字符串，返回false
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  // 如果遍历完成后未返回false，则是回文字符串，返回true
  return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("aba"));

function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
// 调用
function test() {
  console.log("test");
}
const debounceTest = debounce(test, 1000);
debounceTest();
