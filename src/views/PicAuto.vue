<template>
  <div class="pic-auto-head">
    <h1>5. Welcome pic auto!</h1>
    <br>    <br>    
  </div>
  <div class="pic-auto">
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
  <br> 
  <br> 
  <br> 
  <div>
     <button @click="$router.push('/')">Go to homeview page</button>
  </div>
</template>

<style scoped>

.pic-auto {
  display: flex; /* 让三张图片排成一行 */
  overflow-x: hidden;  /* 控制父容器宽度不可见，只显示一张图片大小 */
 
}

.pic-auto img {
  max-width: 60%; /* 确保图片完全填充父容器宽度 */
  height: auto; /* 根据图片原始比例等变化高度 */
  animation: slide 50s linear infinite; /* 添加动画效果 */
}

@keyframes slide {
  0% { 
    transform: translateX(0);
  }
  100% { 
    transform: translateX(-800%); /* 平移距离为两倍图片宽度 */
  }
}


</style>


