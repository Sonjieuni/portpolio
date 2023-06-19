<template>
  <div class="section">
    <v-btn class="back" background-color="primary" elevation="2" large text a href="/portpolio/#page3">BACK</v-btn>  
    <div class="test-wrap">
      <br>
      <div class="text"><strong>VIVO 제품 서비스 소개서</strong></div>
        <br>
        <br>
    </div>
        <div class="container">
          <div class="flex">
            <img src="image/kiosk/kiosk1.png" class="img">
            <img src="image/kiosk/kiosk2.png" class="img">
            <strong class="memo"> ← QR코드로 가게 메뉴 불러들임</strong></div>
          <div class="flex2">
            <strong class="memo2">사용자 편의에 맞게 글씨 크기 조정 가능 →&nbsp;&nbsp;</strong>
            <img src="image/kiosk/kiosk3.png" class="img">
            <img src="image/kiosk/kiosk4.png" class="img">
            <img src="image/kiosk/kiosk5.png" class="img">
          </div>

          <div class="flex3">
            <img src="image/kiosk/kiosk6.png" class="img" >
            <img src="image/kiosk/kiosk7.png" class="img" >
            <strong class="memo"> ←나만의 메뉴에 자주 먹는 메뉴 저장 /  결제는 간편하게 바코드로 진행</strong>
          </div>
        </div>
  </div>
</template>

 
<script>
import carousel from "vue-owl-carousel2";

export default {}

</script>

<style scoped>
.back{
  background-color: yellowgreen;
  position: fixed;
}
.container {
  flex-direction: row;
  width: fill;
  height: fill;
  justify-content: space-around;
}
.flex {
  float: left;
  font-size: 25px;
  text-align: center;
}
.flex2 {
  float: right;
  font-size: 20px;
}
.flex3 {
  float: left;
  padding: 20px;
  font-size: 22px;
}
.text {
  font-size: 25px;
  text-align: center;
}
.img {
  padding: 15px;
}
.memo {
  text-align: center;
  position: absolute;
  margin: auto;
  padding: 300px 0;
}
.memo2 {
  vertical-align: 300px; 
}
</style>