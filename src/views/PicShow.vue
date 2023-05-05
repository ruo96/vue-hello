<template>
  <div class="pic-show-head">
    <h1>4. Welcome pic show!</h1>
    <br>
  </div>
  <div class="pic-show">    
    <br>
    <img src="@/assets/buliangren-1.png" alt="Image 1">
    <img src="@/assets/buliangren-2.png" alt="Image 2">
    <img src="@/assets/buliangren-3.png" alt="Image 3">
    <img src="@/assets/buliangren-4.png" alt="Image 4">
    <img src="@/assets/buliangren-5.png" alt="Image 5">
    <img src="@/assets/buliangren-6.png" alt="Image 6">
    <img src="@/assets/buliangren-7.png" alt="Image 7">
    <img src="@/assets/buliangren-8.png" alt="Image 8">
    <img src="@/assets/buliangren-9.png" alt="Image 9">
    <br>    
  </div>
  <div>
     <button @click="$router.push('/')">Go to homeview page</button>
  </div>
</template>

<script>


</script>

<style scoped>

.pic-show {
  display: flex; /* 让三张图片排成一行 */
  overflow-x: scroll; /* 设置水平滚动 */
  scroll-behavior: smooth; /* 添加平滑过渡效果 */
}

.pic-show img {
  max-width: 100%; /* 确保图片适应父容器宽度 */
  margin-right: 10px; /* 预留出图片之间的间距 */
  transition: transform 0.5s ease; /* 将 transform 属性添加过渡动画 */
}

.pic-show img:last-child {
  margin-right: 0; /* 最后一张图片没有右侧的 margin */
}

/* 鼠标悬浮到图片上时放大图片 */
.pic-show img:hover {
  transform: scale(1.05);
}



</style>


