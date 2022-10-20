<template>
<div>
  <v-btn class="back" background-color="primary"
  elevation="2" large text a href="/portpolio/#page3">BACK</v-btn>  
  <p></p>
  <div class="text"><strong>얼굴인식 출석체크 딥러닝 구조</strong></div>
  <p></p>
  <div class="countainer">
    <div class="carousel-wrap">
      <carousel v-bind="options" @initialized="init" @changed="changed">
        <img src="image/deep/deep1.png" />
        <img src="image/deep/deep2.png" />
        <img src="image/deep/deep3.png" />
        <img src="image/deep/deep4.png" />
      </carousel>
    </div>
      <div class="text"><strong>얼굴인식 출석체크 딥러닝 실제 구현 사진</strong></div>
      <p></p>
    <div class="carousel-wrap">
      <carousel v-bind="options" @initialized="init" @changed="changed">
        <img src="image/deep/deep5.png" />
        <img src="image/deep/deep6.png" />
        <img src="image/deep/deep7.png" />
        <img src="image/deep/deep8.png" />
        <img src="image/deep/deep9.png" />
      </carousel>
    </div>
  </div>
</div>
</template>

 
<script>
import carousel from "vue-owl-carousel2";

export default {
  name: "swipeTest",
  components: {
    carousel,
  },
  data() {
    return {
      plugin: null,
      options: {
        items: 1,
        startPosition: 2,
      },
    };
  },
  methods: {
    handleScroll() {
      window.addEventListener("scroll", () => {
        let scrollT = window.scrollY;
      });
    },
    init() {
      this.plugin = this.$children[0];
    },
    changed(e) {
      this.options.startPosition = e.item.index;
    },
  },
  mounted() {
    this.handleScroll();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  
}
</script>

<style scoped>
.back{
  background-color: yellowgreen;
  position: fixed;
}
.carousel-wrap {
  width: 600px;
  height: 600px;
  background-color: white;
  position: relative;
  margin: auto;
}
.text {
  font-size: 20px;
  text-align : center;
}
</style>