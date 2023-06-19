<template>
<div>
    <v-btn class="back" background-color="primary"
  elevation="2" large text a href="/portpolio/#page3">BACK</v-btn>  
  <div class="test-wrap">
    <br>
    <div class="text"><strong>VIVO 제품 서비스 소개서 </strong></div>
    <div class="carousel-wrap">
      <carousel v-bind="options" @initialized="init" @changed="changed">
        <img src="https://github.com/Sonjieuni/portpolio/assets/105254081/c967e01f-23f2-47f0-b14b-a4c6f61a1107" />
        <img src="image/platform/platform2.png" />
        <img src="https://github.com/Sonjieuni/portpolio/assets/105254081/b4cc7048-2d6a-46c5-bbc1-58b79a3f32bd" />
        <img src="https://github.com/Sonjieuni/portpolio/assets/105254081/3d1fc250-132c-4923-b579-7207edd7e598" />
        <img src="https://github.com/Sonjieuni/portpolio/assets/105254081/7ef756d1-5430-475a-ad1e-da6b94e862fa" />
        <img src="image/platform/platform6.png" />
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
};
</script>

<style scoped>
.back{
  background-color: yellowgreen;
  position: fixed;
}
.carousel-wrap {
  width: 60%;
  height: 60%;
  background-color: white;
  position: relative;
  margin: auto;
}
.text {
  font-size: 20px;
  text-align : center;
}
</style>
