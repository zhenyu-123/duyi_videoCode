/**
 * 并发请求
 * @param {*} urls 待请求的url数组
 * @param {*} maxNum 最大并发数
 */
function concurRequest(urls, maxNum) {
  return new Promise((resolve) => {
    if (urls.length === 0) {
      resolve([]);
      return;
    }
    const results = []; //所以的请求结果
    let index = 0; //下一个请求的下标
    let count = 0; // 当前请求的完成数量
    // 发送请求
    async function request() {
      if (index === urls.length) {
        return;
      }
      const i = index;
      const url = urls[index];
      index++;

      try {
        const resp = await fetch(url);
        // resp加入到results
        results[i] = resp;
      } catch (err) {
        // err加入到results
        results[i] = err;
      } finally {
        // 判断是否所有请求都已经完成
        count++;
        if (count === urls.length) {
          console.log("所有请求执行完成！");
          resolve(results);
        }
        request();
      }
    }
    // 确保请求的次数不超过最大请求次数和URL数组的长度。
    const requestNum = Math.min(maxNum, urls.length);
    for (let i = 0; i < requestNum; i++) {
        request();
    }
  });
}
