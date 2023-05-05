<template>

  <div class="pic-wall-head">
    <h1>4. Welcome pic wall!</h1>
  </div>

  <br>

  <div class="pic-wall">
    
    <!-- 定义返回上一页的按钮 -->

    <transition name="fade" mode="out-in">
      <img :key="getCurrentImage()" 
           :src="getCurrentImage()" 
           @click="nextImage" 
           class="carousel-image">
    </transition>
  </div>

  <br>

  <div class="pic-wall-foot">
    <button @click="$router.push('/')">Go to homeview page</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "buliangren-1.png",
        "buliangren-2.png",
        "buliangren-3.png",
        "buliangren-4.png",
        "buliangren-5.png",
        "buliangren-6.png",
        "buliangren-7.png",
        "buliangren-8.png",
        "buliangren-9.png"
      ],
      currentIndex: 0,
      timer: null
    }
  },
  methods: {
    getCurrentImage() {
      return require(`@/assets/${this.images[this.currentIndex]}`)
    },
    nextImage() {
      this.currentIndex++
      if(this.currentIndex >= this.images.length) {
        this.currentIndex = 0
      }
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.nextImage()
    }, 2000)
  },
  beforeUnmount() {
    clearInterval(this.timer)
  }
}

</script>

<style scoped>

.pic-wall {
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 80%;
}

.pic-wall img {
  max-width: 80%;
  max-height: 80%;
  object-fit: cover;
}

.pic-wall-foot {
  position: fixed;
  left: 0;
  top: 800px;
}

.carousel-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center center;
  position: absolute;
  left: 0;
  top: 100px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(50%);
}

.fade-leave-active {
  position: absolute;
  left: 0;
  top: 100px;
  z-index: 1;
}acity: 0;

</style>


