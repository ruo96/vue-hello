<template>
  <div class="homeview-head">
    <h1>1. Welcome My Friend</h1>
    <!-- 定义跳转到欢迎页面的按钮 -->
  </div>
  <div class="homeview">
    <!-- 定义跳转到欢迎页面的按钮 -->
    <img :src="currentImgUrl" @click="changeImg">
  </div>
  <div class="homeview-foot">
    <button @click="$router.push('/welcome-again')">Go to welcome page</button>
    
    <button @click="$router.push('/pic-wall')">Go to pic wall page</button>
    
    <button @click="$router.push('/pic-show')">Go to pic show page</button>
    
    <button @click="$router.push('/pic-auto')">Go to pic auto page</button>
  </div>

  <br>
  <div class="ajax-req">
    <button @click="$router.push('/ajax-req')">Go to ajax page</button>
  </div>
</template>

<script>
export default{
  data(){
    return {
      imgList: [
        'buliangren-1.png',
        'buliangren-2.png',
        'buliangren-3.png',
        'buliangren-4.png',
        'buliangren-5.png',
        'buliangren-6.png',
        'buliangren-7.png',
        'buliangren-8.png',
        'buliangren-9.png'
      ],
      currentImgIndex: 0,
    }
  },
  computed: {
    currentImgUrl() {
      return require(`@/assets/${this.imgList[this.currentImgIndex]}`)
    }
  },
  methods: {
    changeImg() {
      this.currentImgIndex = (this.currentImgIndex + 1 ) %this.imgList.length
    }
  },
}

</script>
