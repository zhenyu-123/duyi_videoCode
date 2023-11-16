// Vue2中使用防抖
//https://blog.csdn.net/LRQQHM/article/details/132072117

// Vue3 使用customRef 防抖

// import { customRef } from "vue";

// //设置默认的时间间隔为1000ms
// export function debounceRef(value, duration = 1000) {
//     //闭包缓存计时器
//     let timer;
//     return customRef((tarck, trigger) => {
//         return {
//             get(){
//                 //收集依赖
//                 tarck();
//                 return value;
//             },
//             set(val){
//                 //短时间内连续触发改变这个val的事件,清除计时器,重新开始记时
//                 clearTimeout(timer)
//                 timer=setTimeout(()=>{
//                     //派发更新
//                     trigger()
//                     value=val
//                 },duration)
//             }
//         }
//     })
// }

/* <template>
  <div class="container">
    <input v-model="text" placeholder="请输入内容" />
    <p>{{ text }}</p>
  </div>
</template>
 
<script setup>
import {debounceRef} from './debounce.js'
const text = debounceRef('',500);
</script> */
