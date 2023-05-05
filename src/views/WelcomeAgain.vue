<template>
  <div class="welcome-again">
    <h1>2. Welcome again!</h1>
    <!-- 定义返回上一页的按钮 -->
    <!--  @click="$router.go(-1)">Go back -->
    <!-- 定义跳转到欢迎页面的按钮 -->
    <button @click="$router.push('/welcome-finally')">Go to welcome-finally page</button>
  </div>
</template>