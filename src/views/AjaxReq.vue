<template>
  <div class="ajax-req">
    <h1> Welcome Ajax!</h1>

    <!-- 定义跳转到欢迎页面的按钮 -->
    <button @click="$router.push('/')">Go to homeview page</button>
  </div>

  <div>
    <textarea v-model="result" rows="30"></textarea>
  </div>

  <div class="bottom-style">
    <button @click="sendRequest">发送请求</button>
  </div>


</template>

<script>
import axios from 'axios'
export default {
  name: 'HttpDemo',
  data() {
    return {
      result: ''
    }
  },
  methods: {
    async sendRequest() {
      try {
        const response = await axios.get('https://www.baidu.com')
        console.log("返回信息：",response.data)
        this.result = response.data
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>