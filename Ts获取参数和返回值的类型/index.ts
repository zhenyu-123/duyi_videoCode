/*
 * @Description:
 * @Autor: sy
 * @Date: 2023-12-05 10:04:25
 * @LastEditors: sy
 * @LastEditTime: 2023-12-05 10:11:49
 */
// TS工具类函数:Parameters :获取函数参数，传入一个函数，返回一个数组，数组中存放函数的参数类型
const params: Parameters<typeof add>[0] = {};// 函数的参数类型

const resp:ReturnType<typeof add> = {};// 函数的返回值类型


function add(obj: object) {
  return obj;
}
