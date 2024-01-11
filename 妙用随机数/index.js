/*
 * @Description:
 * @Autor: sy
 * @Date: 2024-01-10 09:49:51
 * @LastEditors: sy
 * @LastEditTime: 2024-01-10 09:59:23
 */
function randomColor() {
  return "#" + Math.random().toString(16).substring(2, 8).padEnd(6, "0");
}
console.log(randomColor());
